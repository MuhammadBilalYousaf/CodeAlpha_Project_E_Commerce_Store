// header 
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
    




        
        const categoryButtons = document.querySelectorAll('.category-slider button');
        const productGrid = document.getElementById('productGrid');
        const productCards = productGrid.querySelectorAll('.product-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove 'active' class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add 'active' class to the clicked button
                button.classList.add('active');

                // Get the selected category
                const selectedCategory = button.dataset.category;

                // Show or hide product cards based on category
                productCards.forEach(card => {
                    if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
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
