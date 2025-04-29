let cart = JSON.parse(localStorage.getItem('cart')) || [];


// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to add a product to the cart
function addToCart(productId, name, price, image) {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name, price, image, quantity: 1 });
    }
    saveCart();
    // alert(`${name} has been added to the cart!`);
}

// Render cart on page load (for cart.html)
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
});

// Function to render the cart items on the cart page
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (!cartContainer || !cartTotal) return;

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price}</p>
                    <p>Quantity: 
                        <button onclick="updateQuantity('${item.id}', -1)">-</button>
                        ${item.quantity}
                        <button onclick="updateQuantity('${item.id}', 1)">+</button>
                    </p>
                    <p>Total: ₹${itemTotal.toFixed(2)}</p>
                  <button onclick="removeFromCart('${item.id}')">
  <i class="fa fa-trash"></i> Remove</button>

                </div>
            </div>
        `;
    });

    cartTotal.textContent = `Total: ₹${total.toFixed(2)}`;
}

// Function to update the quantity of a product in the cart
function updateQuantity(productId, change) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += change;
        if (product.quantity <= 0) removeFromCart(productId);
        saveCart();
        renderCart();
    }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}
