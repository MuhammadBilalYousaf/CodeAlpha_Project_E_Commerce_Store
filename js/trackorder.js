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
    const trackOrderForm = document.getElementById('trackOrderForm');
    const orderStatus = document.getElementById('orderStatus');

    trackOrderForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const orderNumber = document.getElementById('orderNumber').value.trim();

        // Simulating an order lookup (In reality, this would involve an API call to a server)
        const orders = {
            '12345': 'Your order is being processed.',
            '23456': 'Your order has been shipped.',
            '34567': 'Your order is out for delivery.',
            '45678': 'Your order has been delivered.',
        };

        if (orders[orderNumber]) {
            orderStatus.textContent = orders[orderNumber];
            orderStatus.style.color = 'green';
        } else {
            orderStatus.textContent = 'Order not found. Please check your order number.';
            orderStatus.style.color = 'red';
        }
    });
});
