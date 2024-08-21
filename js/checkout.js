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





document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const totalPriceElement = document.getElementById('totalPrice');
    const placeOrderButton = document.getElementById('placeOrderButton');
    const confirmationModal = document.getElementById('confirmationModal');
    const billingForm = document.getElementById('billingForm');
    const paymentForm = document.getElementById('paymentForm');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            // <img src="${item.image}" alt="${item.name}">
            itemElement.innerHTML = `
                <p>${item.name}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            cartItemsContainer.appendChild(itemElement);
            totalPrice += item.quantity * item.price;
        });

        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    function validateForms() {
        // Basic validation for demo purposes
        const forms = [billingForm, paymentForm];
        return forms.every(form => form.reportValidity());
    }

    placeOrderButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (validateForms()) {
            // Simulate order placement
            setTimeout(() => {
                confirmationModal.style.display = 'flex';
                localStorage.removeItem('cart'); // Clear cart after successful order
            }, 1000);
        } else {
            alert('Please fill out all required fields correctly.');
        }
    });

    // Initialize the page
    renderCartItems();
});
