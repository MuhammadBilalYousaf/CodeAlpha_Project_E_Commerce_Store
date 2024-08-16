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







// JavaScript for Banner Slider
document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider Code
    let slides = document.querySelectorAll('#banner-slider .slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    document.getElementById('prev-btn').addEventListener('click', showPrevSlide);
    document.getElementById('next-btn').addEventListener('click', showNextSlide);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === currentIndex) {
                slide.classList.add('prev');
            }
        });
        currentIndex = index;
    }

    function showPrevSlide() {
        const newIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        showSlide(newIndex);
    }

    function showNextSlide() {
        const newIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showSlide(newIndex);
    }

    setInterval(showNextSlide, 5000); // Automatically change slides every 5 seconds
});
