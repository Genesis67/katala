// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });
    }
});

// Cart functionality - Updated for Katala Home Essentials
let cart = JSON.parse(localStorage.getItem('katalaCart')) || [];

// Helper function to get product image by ID
function getProductImage(productId) {
    // Use the products array from products.js
    if (typeof products !== 'undefined') {
        const product = products.find(p => p.id === productId);
        return product ? product.image : 'https://images.unsplash.com/photo-1584990347449-9630c9dfd4e1?w=80&h=80&fit=crop&crop=center';
    }
    return 'https://images.unsplash.com/photo-1584990347449-9630c9dfd4e1?w=80&h=80&fit=crop&crop=center';
}

function updateCartCount() {
    const counts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => el.textContent = totalItems);
}

function addToCart(productId, productName, productPrice) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }
    localStorage.setItem('katalaCart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('katalaCart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="products.html">Start shopping</a></p>';
        if (subtotalEl) subtotalEl.textContent = '₦0.00';
        if (shippingEl) shippingEl.textContent = '₦0.00';
        if (taxEl) taxEl.textContent = '₦0.00';
        if (totalEl) totalEl.textContent = '₦0.00';
        return;
    }
    
    let html = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const productImage = getProductImage(item.id);
        
        html += `
            <div class="cart-item">
                <img src="${productImage}" alt="${item.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22><rect width=%2280%22 height=%2280%22 fill=%22%23e9d8c4%22/><text x=%2210%22 y=%2245%22 font-size=%2212%22 fill=%22%238b6b4d%22>${item.name}</text></svg>'" />
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="price">₦${item.price.toLocaleString()} × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    
    const shipping = subtotal >= 200000 ? 0 : 5000;
    const tax = subtotal * 0.075;
    const total = subtotal + shipping + tax;
    
    if (subtotalEl) subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `₦${shipping.toLocaleString()}`;
    if (taxEl) taxEl.textContent = `₦${tax.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `₦${total.toLocaleString()}`;
    
    // Update checkout if on checkout page
    if (window.location.pathname.includes('checkout.html')) {
        updateCheckoutSummary();
    }
}

function updateCheckoutSummary() {
    const itemsContainer = document.getElementById('checkoutItems');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const shippingEl = document.getElementById('checkoutShipping');
    const taxEl = document.getElementById('checkoutTax');
    const totalEl = document.getElementById('checkoutTotal');
    
    if (!itemsContainer) return;
    
    let subtotal = 0;
    let html = '';
    
    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        html += `<div class="summary-row"><span>${item.name} × ${item.quantity}</span><span>₦${(item.price * item.quantity).toLocaleString()}</span></div>`;
    });
    
    itemsContainer.innerHTML = html;
    
    const shipping = subtotal >= 200000 ? 0 : 5000;
    const tax = subtotal * 0.075;
    const total = subtotal + shipping + tax;
    
    if (subtotalEl) subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `₦${shipping.toLocaleString()}`;
    if (taxEl) taxEl.textContent = `₦${tax.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `₦${total.toLocaleString()}`;
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Render cart if on cart page
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
    
    // Render checkout summary if on checkout page
    if (window.location.pathname.includes('checkout.html')) {
        updateCheckoutSummary();
    }
});

// Checkout form handler
document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Order placed successfully! Thank you for shopping with Katala Home Essentials.');
            cart = [];
            localStorage.setItem('katalaCart', JSON.stringify(cart));
            updateCartCount();
            window.location.href = 'index.html';
        });
    }
});

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            this.reset();
        });
    }
});

// Product detail page - add to cart
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            addToCart(id, name, price);
        });
    }
});