// Product// Product data for Katala Home Essentials - 12 products with dynamic Unsplash search fallback URLs
// Product data for Katala Home Essentials - 12 products with dynamic Unsplash search fallback URLs
const products = [
    { 
        id: 1, 
        name: 'Premium Cast Iron Skillet', 
        price: 45000, 
        category: 'cookware', 
        description: 'Professional-grade cast iron skillet with superior heat retention. Perfect for searing, frying, and baking.',
        image: 'https://images.unsplash.com/photo-1585515320310-2592db87d5b6?w=400&h=400&fit=crop&crop=center',
        dimensions: '30cm diameter',
        material: 'Cast Iron',
        color: 'Black'
    },
    { 
        id: 2, 
        name: 'Professional Chef\'s Knife Set', 
        price: 35000, 
        category: 'kitchen-tools', 
        description: 'Premium German stainless steel knife set with ergonomic handles. Includes chef\'s knife, paring knife, and utility knife.',
        image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400&h=400&fit=crop&crop=center',
        dimensions: '8-inch blade',
        material: 'Stainless Steel',
        color: 'Silver'
    },
    { 
        id: 3, 
        name: 'Ceramic Vase Collection', 
        price: 28000, 
        category: 'home-decor', 
        description: 'Handcrafted ceramic vase with elegant matte finish. Perfect for modern and traditional interiors.',
        image: 'https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?w=400&h=400&fit=crop&crop=center',
        dimensions: '25cm height',
        material: 'Ceramic',
        color: 'White'
    },
    { 
        id: 4, 
        name: 'Walnut Cutting Board Set', 
        price: 22000, 
        category: 'kitchen-tools', 
        description: 'Premium walnut wood cutting board set with juice groove. Includes 3 sizes for all your chopping needs.',
        image: 'https://images.unsplash.com/photo-1590794056226-77ef3a6c4743?w=400&h=400&fit=crop&crop=center',
        dimensions: '40x30cm',
        material: 'Walnut Wood',
        color: 'Brown'
    },
    { 
        id: 5, 
        name: 'Stainless Steel Cookware Set', 
        price: 85000, 
        category: 'cookware', 
        description: 'Complete 10-piece stainless steel cookware set with encapsulated base for even heat distribution.',
        image: 'https://images.unsplash.com/photo-1584990347449-a2e0a29ef402?w=400&h=400&fit=crop&crop=center',
        dimensions: 'Varied sizes',
        material: 'Stainless Steel',
        color: 'Silver'
    },
    { 
        id: 6, 
        name: 'Minimalist Floor Lamp', 
        price: 55000, 
        category: 'furniture', 
        description: 'Elegant minimalist floor lamp with warm ambient lighting. Adjustable arm for perfect reading light.',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&crop=center',
        dimensions: '150cm height',
        material: 'Metal & Fabric',
        color: 'Matte Black'
    },
    { 
        id: 7, 
        name: 'Bamboo Storage Organizer', 
        price: 18000, 
        category: 'home-decor', 
        description: 'Sustainable bamboo storage organizer with multiple compartments. Perfect for kitchen or bathroom organization.',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop&crop=center',
        dimensions: '35x25x10cm',
        material: 'Bamboo',
        color: 'Natural'
    },
    { 
        id: 8, 
        name: 'Non-Stick Frying Pan', 
        price: 32000, 
        category: 'cookware', 
        description: 'Premium non-stick frying pan with PFOA-free coating. Even heat distribution for perfect cooking.',
        image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=400&h=400&fit=crop&crop=center',
        dimensions: '28cm diameter',
        material: 'Aluminum',
        color: 'Black'
    },
    { 
        id: 9, 
        name: 'Washing Machine', 
        price: 25000, 
        category: 'kitchen-tools', 
        description: 'BPA-free glass food storage containers with airtight bamboo lids. Set of 5 in various sizes.',
        image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=400&fit=crop&crop=center',
        dimensions: 'Varied sizes',
        material: 'Glass & Bamboo',
        color: 'Clear'
    },
    { 
        id: 10, 
        name: 'Clothing', 
        price: 75000, 
        category: 'furniture', 
        description: 'Solid wood bookshelf with 5 adjustable shelves. Perfect for your living room or home office.',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center',
        dimensions: '120x180x30cm',
        material: 'Solid Wood',
        color: 'Walnut'
    },
    { 
        id: 11, 
        name: 'Home Essentials', 
        price: 38000, 
        category: 'kitchen-tools', 
        description: 'Elegant marble serving board for cheese, charcuterie, and appetizers. Natural veining makes each piece unique.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop&crop=center',
        dimensions: '50x25cm',
        material: 'Marble',
        color: 'White/Grey'
    },
    { 
        id: 12, 
        name: 'Velvet Throw Pillow Set', 
        price: 15000, 
        category: 'home-decor', 
        description: 'Luxurious velvet throw pillow set with down-alternative filling. Set of 2 in neutral tones.',
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop&crop=center',
        dimensions: '45x45cm',
        material: 'Velvet',
        color: 'Beige'
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
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22><rect width=%22400%22 height=%22400%22 fill=%22%23e9d8c4%22/><text x=%2250%22 y=%22200%22 font-size=%2220%22 fill=%22%238b6b4d%22>${product.name}</text></svg>'" />
            <div class="product-name">${product.name}</div>
            <div class="product-price">₦${product.price.toLocaleString()}</div>
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
            <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 600%22><rect width=%22600%22 height=%22600%22 fill=%22%23e9d8c4%22/><text x=%22100%22 y=%22300%22 font-size=%2230%22 fill=%22%238b6b4d%22>${product.name}</text></svg>'" />
        </div>
        <div class="product-detail-info">
            <h1>${product.name}</h1>
            <div class="price">₦${product.price.toLocaleString()}</div>
            <p class="description">${product.description}</p>
            <div class="product-attributes">
                <div><strong>Dimensions:</strong> ${product.dimensions}</div>
                <div><strong>Material:</strong> ${product.material}</div>
                <div><strong>Color:</strong> ${product.color}</div>
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