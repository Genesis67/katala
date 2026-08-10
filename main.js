// // main.js - Core E-commerce Prototype Router
const products = [
  {
    id: 1,
    name: "Aurelius Oxford Dress Shoe",
    category: "Classic Collection",
    price: "$280.00",
    image: "image_agent_tag_16567891273776312917",
    description: "Handcrafted from full-grain vegetable-tanned leather. Features closed-channel stitching and hand-painted finishings, creating a striking formal asset that naturally develops character over its lifespan.",
    sizes: [40, 41, 42, 43, 44, 45]
  },
  {
    id: 2,
    name: "Specter Minimalist Sneaker",
    category: "Modern Casual",
    price: "$195.00",
    image: "image_agent_tag_16567891273776315584",
    description: "An ultra-clean silhouette handcrafted in Italy. Crafted with buttery-soft calfskin leather, a cushioned calfskin footbed, and margom rubber outsoles for peak performance aesthetic.",
    sizes: [39, 40, 41, 42, 43, 44]
  },
  {
    id: 3,
    name: "Classic Chelsea Boot",
    category: "Signature Series",
    price: "$340.00",
    image: "image_agent_tag_16567891273776312726",
    description: "Made for rugged versatility without sacrificing luxury. Hand-lasted European suede, flexible elastic side panels, and Goodyear-welt construction ensuring water-resistant, lifelong wear.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 4,
    name: "D'Orsay Leather Loafer",
    category: "Heritage Line",
    price: "$245.00",
    image: "image_agent_tag_16567891273776314155",
    description: "Stripped down to absolute elegance. A relaxed slip-on style meticulously crafted with soft black nappa leather, complete with a structured stacked wooden heel.",
    sizes: [40, 41, 42, 43, 44]
  }
];

// Cart State Simulation
let cartCount = parseInt(localStorage.getItem('cartCount') || '0');

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) badge.innerText = cartCount;
}

function addToCart() {
  cartCount += 1;
  localStorage.setItem('cartCount', cartCount);
  updateCartBadge();
  alert('Added to collection successfully.');
}

// Dom Routing / Injection Engine
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();

  // Index Page Loader
  const gridContainer = document.getElementById("catalog-grid");
  if (gridContainer) {
    gridContainer.innerHTML = products.map(prod => `
      <div class="product-card">
        <a href="show.html?id=${prod.id}">
          <div class="product-img-wrapper">
            <img class="product-img" src="${prod.image}" alt="${prod.name}">
          </div>
          <div class="product-info">
            <span class="product-tag">${prod.category}</span>
            <h3 class="product-name">${prod.name}</h3>
            <span class="product-price">${prod.price}</span>
          </div>
        </a>
      </div>
    `).join('');
  }

  // Show Page Loader
  const detailContainer = document.getElementById("product-detail-view");
  if (detailContainer) {
    const params = new URLSearchParams(window.location.search);
    const prodId = parseInt(params.get('id')) || 1;
    const prod = products.find(p => p.id === prodId) || products[0];

    detailContainer.innerHTML = `
      <div class="product-detail-container">
        <div class="detail-gallery">
          <div class="main-image">
            <img src="${prod.image}" alt="${prod.name}">
          </div>
        </div>
        <div class="detail-info">
          <div class="detail-header">
            <span class="product-tag">${prod.category}</span>
            <h1>${prod.name}</h1>
            <div class="detail-price">${prod.price}</div>
          </div>
          <p class="detail-desc">${prod.description}</p>
          
          <div class="detail-options">
            <span class="option-title">Select Size</span>
            <div class="size-selector">
              ${prod.sizes.map((s, index) => `
                <button class="size-btn ${index === 0 ? 'active' : ''}" onclick="selectSize(this)">${s}</button>
              `).join('')}
            </div>
          </div>

          <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="addToCart()">Add To Cart</button>
          <a href="index.html" class="btn btn-outline" style="text-align:center;">Back to Collection</a>
        </div>
      </div>
    `;
  }
});

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}