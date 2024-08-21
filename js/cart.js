const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelectorAll('#menu>ul>li')

function toggleMenu() {
    if (window.innerWidth <= 480) {
        menuToggle.style.display = 'block';
        menuItems.forEach(item => {
            item.style.display = 'none'; // Hide menu items initially
        });
    } else {
        menuToggle.style.display = 'none';
        menuItems.forEach(item => {
            item.style.display = 'block'; // Show menu items on larger screens
        });
    }
}

toggleMenu();

    // Check on window resize
    window.addEventListener('resize', toggleMenu);

    menuToggle.addEventListener('click', () => {
        menuItems.forEach(item => {
            if (item.style.display === 'block') {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });





document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalItemsElement = document.getElementById('totalItems');
    const totalPriceElement = document.getElementById('totalPrice');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let totalItems = 0;
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <p>Quantity: <input type="number" value="${item.quantity}" data-index="${index}" min="1"></p>
                <button class="remove-item" data-index="${index}">Remove</button>
            `;

            cartItemsContainer.appendChild(cartItem);

            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = totalPrice.toFixed(2);

        // Add event listeners for remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                removeItemFromCart(this.dataset.index);
            });
        });

        // Add event listeners for quantity changes
        document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('change', function () {
                updateItemQuantity(this.dataset.index, this.value);
            });
        });
    }

    function removeItemFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function updateItemQuantity(index, quantity) {
        cart[index].quantity = parseInt(quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    updateCartDisplay();
});



// CHECKOUT BTN 
document.addEventListener('DOMContentLoaded', function() {
    const proceedButton = document.getElementById('checkoutButton');
    
    if (proceedButton) {
        proceedButton.addEventListener('click', function(event) {
            event.preventDefault();

            // Retrieve cart items from localStorage using the correct key
            let cartItems = localStorage.getItem('cart');
            
            // Debug: Check if cartItems exist
            console.log("Raw cartItems from localStorage:", cartItems);
            
            // Parse the cartItems if it exists
            cartItems = cartItems ? JSON.parse(cartItems) : [];
            
            // Debug: Check the parsed cartItems array
            console.log("Parsed cartItems array:", cartItems);
            
            // Check if the cart has any items
            if (cartItems.length > 0) {
                // Redirect to the checkout page
                window.location.href = 'checkout.html';
            } else {
                alert('Your cart is empty. Please add items to your cart before proceeding to checkout.');
            }
        });
    } else {
        console.error('Proceed to Checkout button not found');
    }
});
