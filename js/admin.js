// Admin panel functionality - Updated for Katala Home Essentials
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
                const name = row.cells[1] ? row.cells[1].textContent : 'Product';
                const price = row.cells[2] ? row.cells[2].textContent : '₦0';
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

// Quick add product functionality
document.addEventListener('DOMContentLoaded', function() {
    const quickForm = document.getElementById('quickAddProductForm');
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('quickProductName').value;
            const price = document.getElementById('quickProductPrice').value;
            const category = document.getElementById('quickProductCategory').value;
            
            if (name && price) {
                alert(`"${name}" added to inventory!`);
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});