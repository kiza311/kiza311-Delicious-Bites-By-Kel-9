let cart = [];

function showTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove 'active' class from all navigation links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show the selected tab and highlight the active link
    const selectedTab = document.getElementById(tabName);
    selectedTab.classList.add('active');
    
    const activeLink = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    activeLink.classList.add('active');
}

// Function to add items to the cart
function addToCart(item) {
    // Add the item to the cart
    cart.push(item);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    // Get the cart items list element
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Clear current cart display

    // Add all items in the cart to the cart display
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });

    // Update the total price (for simplicity, assume each product costs $10)
    const totalPrice = cart.length * 10000;
    document.getElementById('cart-total').textContent = `Total: Rp.${totalPrice}`;
}

