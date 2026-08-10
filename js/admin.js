// Admin panel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add product form handler
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Product added successfully!');
            this.reset();
        });
    }
    
    // Admin login form handler (already in login.html)
    // Delete product confirmation
    const deleteButtons = document.querySelectorAll('.admin-table .fa-trash');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this product?')) {
                const row = this.closest('tr');
                if (row) row.remove();
                alert('Product deleted.');
            }
        });
    });
    
    // Edit product button
    const editButtons = document.querySelectorAll('.admin-table .fa-edit');
    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            if (row) {
                const name = row.cells[1].textContent;
                const price = row.cells[2].textContent;
                alert(`Edit product: ${name}\nCurrent price: ${price}\nRedirect to edit page...`);
                // In a real app, redirect to edit page
            }
        });
    });
    
    // Order status update
    const orderStatusSelects = document.querySelectorAll('.admin-table select');
    orderStatusSelects.forEach(select => {
        select.addEventListener('change', function() {
            alert(`Order status updated to: ${this.value}`);
        });
    });
});