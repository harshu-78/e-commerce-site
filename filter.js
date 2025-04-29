// Get filter options and product grid
const filterOptions = document.querySelector('.filter-options');
const productGrid = document.querySelector('.product-grid');

// Get products data
const products = [
    { id: 1, brand: 'Brand 1', price: 50, category: 'Category 1', name: 'Product 1', image: 'img/products/h12.jpg' },
    { id: 2, brand: 'Brand 2', price: 150, category: 'Category 2', name: 'Product 2', image: 'img/products/h2.jpg' },
    { id: 3, brand: 'Brand 3', price: 250, category: 'Category 3', name: 'Product 3', image: 'img/products/h3.jpg' },
    // Add more products here...
];

// Function to filter products
function filterProducts() {
    const brandFilters = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(checkbox => checkbox.value);
    const priceFilter = document.querySelector('input[name="price"]:checked');
    const categoryFilters = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);

    const filteredProducts = products.filter(product => {
        const brandMatch = brandFilters.length === 0 || brandFilters.includes(product.brand);
        const priceMatch = priceFilter === null || (priceFilter.value === '0-100' ? product.price <= 100 : priceFilter.value === '101-200' ? product.price >= 101 && product.price <= 200 : product.price >= 201 && product.price <= 500);
        const categoryMatch = categoryFilters.length === 0 || categoryFilters.includes(product.category);

        return brandMatch && priceMatch && categoryMatch;
    });

    // Display filtered products
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productHTML = `
            <div class="pro">
                <img src="${product.image}">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$${product.price}</h4>
                </div>
                <button class="cart-button" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                    <span class="add-to-cart">Add to cart</span>
                    <span class="added">Added</span>
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-box"></i>
                </button>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productHTML);
    });
}

// Add event listeners to filter options
filterOptions.addEventListener('change', filterProducts);

// Initialize product grid with all products
productGrid.innerHTML = '';
products.forEach(product => {
    const productHTML = `
        <div class="pro">
            <img src="${product.image}">
            <div class="des">
                <span>${product.brand}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <button class="cart-button" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                <span class="add-to-cart">Add to cart</span>
                <span class="added">Added</span>
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-box"></i>
            </button>
        </div>
    `;
    productGrid.insertAdjacentHTML('beforeend', productHTML);
});