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
    const searchInput = document.getElementById('header_search');
    const suggestionsBox = document.getElementById('searchSuggestions');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous suggestions

        if (query.length > 0) {
            productCards.forEach(productCard => {
                const productName = productCard.querySelector('h3').textContent.toLowerCase();
                if (productName.includes(query)) {
                    // Create suggestion item
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item');

                    // Copy product image and name to the suggestion item
                    const productImg = productCard.querySelector('img').cloneNode(true);
                    const productTitle = productCard.querySelector('h3').textContent;

                    // Append elements to suggestion item
                    suggestionItem.appendChild(productImg);
                    suggestionItem.insertAdjacentHTML('beforeend', `<span>${productTitle}</span>`);

                    // Add click event to redirect to product page or action
                    suggestionItem.addEventListener('click', function() {
                        window.location.href = '#'; // Redirect or perform any action when suggestion is clicked
                    });

                    // Add the suggestion item to the suggestions box
                    suggestionsBox.appendChild(suggestionItem);
                }
            });

            // Show suggestions box if there are matches
            if (suggestionsBox.childElementCount > 0) {
                suggestionsBox.style.display = 'block';
            } else {
                suggestionsBox.style.display = 'none';
            }
        } else {
            suggestionsBox.style.display = 'none';
        }
    });

    // Hide suggestions box when clicking outside
    document.addEventListener('click', function(e) {
        if (!suggestionsBox.contains(e.target) && e.target !== searchInput) {
            suggestionsBox.style.display = 'none';
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




// our vision 
// window.addEventListener('scroll', function() {
//     const visionSection = document.querySelector('.our-vision');
//     const scrollPosition = window.pageYOffset;
//     visionSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
// });




// cutomers reviews 
const feedbackItems = document.querySelectorAll('.feedback-item');
const prevBtn = document.querySelector('.prev-feedback');
const nextBtn = document.querySelector('.next-feedback');
let currentIndex = 0;

function showFeedback(index) {
    feedbackItems.forEach((item, i) => {
        item.style.transform = `translateX(${-index * 100}%)`;
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % feedbackItems.length;
    showFeedback(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + feedbackItems.length) % feedbackItems.length;
    showFeedback(currentIndex);
});

// Initial display
showFeedback(currentIndex);

document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("happy-clients");
    const target = 80000; // Target number
    const duration = 9000; // Duration in ms
    const increment = target / (duration / 100);
  
    let count = 0;
  
    function updateCounter() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString(); // Format number with commas
      }
    }
  
    updateCounter();
  });
  




//   faq section 
document.querySelector('.faq-search-bar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    document.querySelectorAll('.faq').forEach(function(item) {
        const question = item.querySelector('.faq-tile').textContent.toLowerCase();
        if (question.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');

    faqs.forEach(faq => {
        const toggle = faq.querySelector('.faq-toggle');

        toggle.addEventListener('click', () => {
            faq.classList.toggle('active');
            toggle.innerHTML = faq.classList.contains('active') ?
                '<i class="fas fa-minus">&#8722;</i>' :
                '<i class="fas fa-plus">&#43;</i>';
        });
    });
});




// document.getElementById('header_search').addEventListener('input', function() {
//     // Get the search query and convert it to lowercase
//     let filter = this.value.toLowerCase();
    
//     // Select all the product cards
//     let products = document.querySelectorAll('.product-card');

//     // Loop through each product card and check if it matches the search query
//     products.forEach(function(product) {
//         let productName = product.querySelector('h3').textContent.toLowerCase();
        
//         if (productName.includes(filter)) {
//             product.style.display = 'block'; // Show the product if it matches
//         } else {
//             product.style.display = 'none'; // Hide the product if it doesn't match
//         }
//     });
// });
