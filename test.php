public function classRanking(Request $request, $class_id)
{
    $schoolId = auth()->user()->school_id;

    // 1. Resolve Term (use request input if provided, or fallback to current active term)
    $currentTerm = $request->filled('term_id')
        ? Term::where('school_id', $schoolId)->find($request->term_id)
        : null;

    if (!$currentTerm) {
        $currentTerm = $this->getCurrentTermSafe($schoolId);
    }

    // 2. Resolve Session (use request input if provided, or fallback to current active session)
    $currentSession = $request->filled('session_id')
        ? SchoolSession::where('school_id', $schoolId)->find($request->session_id)
        : null;

    if (!$currentSession) {
        $currentSession = $this->getCurrentSessionSafe($schoolId);
    }

    // Return early/empty collection if session or term isn't configured
    if (!$currentSession || !$currentTerm) {
        return view('results.ranking', [
            'ranking' => collect(),
            'currentTerm' => $currentTerm,
            'currentSession' => $currentSession,
        ]);
    }

    // 3. Eager load ONLY the results matching the active/selected session and term
    $students = Student::where('school_id', $schoolId)
        ->where('class_id', $class_id)
        ->with(['results' => function ($query) use ($currentSession, $currentTerm) {
            $query->where('school_session_id', $currentSession->id)
                  ->where('term_id', $currentTerm->id);
        }])
        ->get();

    // 4. Map, calculate averages, sort, and assign position ranks
    $ranking = $students->map(function ($student) {
        $average = $student->results->avg('total_score') ?? 0;

        return [
            'student' => $student,
            'results_count' => $student->results->count(),
            'average' => round($average, 2),
        ];
    })
    ->sortByDesc('average')
    ->values()
    ->map(function ($item, $index) {
        $item['position'] = $index + 1; // 1st, 2nd, 3rd...
        return $item;
    });

    return view('results.ranking', compact('ranking', 'currentTerm', 'currentSession'));
}






public function classRanking($class_id, $term_id)
{
    $schoolId = auth()->user()->school_id;

    // Current session (same pattern as showByTerm)
    $currentSession = SchoolSession::where('school_id', $schoolId)
        ->where('is_current', true)
        ->first();

    // Selected term
    $term = Term::where('school_id', $schoolId)
        ->findOrFail($term_id);

    $students = Student::where('school_id', $schoolId)
        ->where('class_id', $class_id)
        ->with(['results' => function ($query) use ($currentSession, $term) {
            $query->where('school_session_id', $currentSession->id)
                  ->where('term_id', $term->id);
        }])
        ->get();

    $ranking = $students->map(function ($student) {
        $average = $student->results->avg('total_score');

        return [
            'student' => $student,
            'average' => $average ?? 0,
        ];
    })
    ->sortByDesc('average')
    ->values();

    return view('results.ranking', compact('ranking', 'currentSession', 'term'));
}