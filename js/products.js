// Product data with real shoe images from Unsplash
// Product data with real shoe images from Unsplash
const products = [
    { 
        id: 1, 
        name: 'Katala Homes Runner', 
        price: 149, 
        category: 'runners', 
        description: 'Sleek runner with responsive cushioning and breathable mesh upper. Crafted with Italian precision.',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
    },
    { 
        id: 2, 
        name: 'Katala Homes Sculpt Lo', 
        price: 179, 
        category: 'lo-tops', 
        description: 'Minimalist low-top crafted from premium Italian leather. Timeless elegance.',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop'
    },
    { 
        id: 3, 
        name: 'Katala Homes Void Mid', 
        price: 219, 
        category: 'mid-tops', 
        description: 'Mid-top with sculpted sole and futuristic design elements. Modern luxury.',
        image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop'
    },
    { 
        id: 4, 
        name: 'Katala Homes Eclipse Low', 
        price: 199, 
        category: 'lo-tops', 
        description: 'Bold silhouette with a modern edge and comfortable fit. Italian craftsmanship.',
        image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=400&h=400&fit=crop'
    },
    { 
        id: 5, 
        name: 'Katala Homes Orbit Runner', 
        price: 159, 
        category: 'runners', 
        description: 'Lightweight runner with responsive foam and sleek design. Performance meets luxury.',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop'
    },
    { 
        id: 6, 
        name: 'Katala Homes Zen Classic', 
        price: 189, 
        category: 'classics', 
        description: 'Timeless classic with premium materials and clean lines. Italian heritage.',
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop'
    },
    { 
        id: 7, 
        name: 'Katala Homes Nova Mid', 
        price: 239, 
        category: 'mid-tops', 
        description: 'Mid-top with innovative sole technology and modern aesthetic. Bold design.',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop'
    },
    { 
        id: 8, 
        name: 'Katala Homes Pulse Lo', 
        price: 169, 
        category: 'lo-tops', 
        description: 'Low-top with pulse cushioning and urban-inspired design. Modern comfort.',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    },
    { 
        id: 9, 
        name: 'Katala Homes Apex Runner', 
        price: 199, 
        category: 'runners', 
        description: 'Premium runner with advanced cushioning system. Peak performance.',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop'
    },
    { 
        id: 10, 
        name: 'Katala Homes Velo Lo', 
        price: 159, 
        category: 'lo-tops', 
        description: 'Sleek low-top with velocity-inspired design. Light and responsive.',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop'
    },
    { 
        id: 11, 
        name: 'Katala Homes Strato Mid', 
        price: 229, 
        category: 'mid-tops', 
        description: 'Mid-top with stratospheric comfort and style. Elevated design.',
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop'
    },
    { 
        id: 12, 
        name: 'Katala Homes Heritage Classic', 
        price: 199, 
        category: 'classics', 
        description: 'Timeless classic with modern comfort technology. Italian tradition.',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    }
];
function getProducts() {
    return products;
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function renderProductGrid(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const list = productList || products;
    
    container.innerHTML = '';
    list.forEach(product => {
        const card = document.createElement('a');
        card.href = `show.html?id=${product.id}`;
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <div class="product-name">${product.name}</div>
            <div class="product-price">€${product.price}</div>
        `;
        
        container.appendChild(card);
    });
}

function renderProductDetail() {
    const container = document.getElementById('productDetail');
    if (!container) return;
    
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = getProductById(id);
    
    if (!product) {
        container.innerHTML = `<div style="grid-column:1/-1;padding:60px 0;"><h2>Product not found</h2><a href="products.html" class="btn btn-primary">Back to shop</a></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="product-detail-image">
            <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="price">€${product.price}</div>
            <p class="description">${product.description}</p>
            <div class="size-selector">
                <button>EU 38</button>
                <button>EU 39</button>
                <button>EU 40</button>
                <button>EU 41</button>
                <button>EU 42</button>
                <button>EU 43</button>
            </div>
            <button class="btn btn-primary" id="addToCartBtn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">
                <i class="fas fa-shopping-bag"></i> Add to cart
            </button>
            <br><br>
            <a href="products.html" class="btn btn-outline">← Back to shop</a>
        </div>
    `;
    
    const addBtn = document.getElementById('addToCartBtn');
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);
            if (typeof addToCart === 'function') {
                addToCart(id, name, price);
            } else {
                alert('Cart functionality not loaded. Please refresh the page.');
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Render ALL products on home page
    if (document.getElementById('featuredGrid')) {
        renderProductGrid('featuredGrid');
    }
    
    // Render all products on products page
    if (document.getElementById('allProductsGrid')) {
        renderProductGrid('allProductsGrid');
        
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const productCount = document.getElementById('productCount');
        
        function filterAndSort() {
            let filtered = [...products];
            const category = categoryFilter ? categoryFilter.value : 'all';
            const sort = sortFilter ? sortFilter.value : 'default';
            
            if (category !== 'all') {
                filtered = filtered.filter(p => p.category === category);
            }
            
            if (sort === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sort === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sort === 'name') {
                filtered.sort((a, b) => a.name.localeCompare(b.name));
            }
            
            renderProductGrid('allProductsGrid', filtered);
            if (productCount) {
                productCount.textContent = `Showing ${filtered.length} products`;
            }
        }
        
        if (categoryFilter) categoryFilter.addEventListener('change', filterAndSort);
        if (sortFilter) sortFilter.addEventListener('change', filterAndSort);
        
        if (productCount) {
            productCount.textContent = `Showing ${products.length} products`;
        }
    }
    
    if (document.getElementById('productDetail')) {
        renderProductDetail();
    }
});