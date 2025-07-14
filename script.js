// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Flash Sale Countdown Timer
    function startCountdown() {
        // Set the countdown time (2 hours from now)
        const countdownDate = new Date();
        countdownDate.setHours(countdownDate.getHours() + 2);
        
        // Update the countdown every second
        const countdownTimer = setInterval(function() {
            // Get current date and time
            const now = new Date().getTime();
            
            // Find the distance between now and the countdown date
            const distance = countdownDate - now;
            
            // Time calculations for hours, minutes and seconds
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            document.querySelector('.time-unit:nth-child(1) .number').textContent = hours.toString().padStart(2, '0');
            document.querySelector('.time-unit:nth-child(2) .number').textContent = minutes.toString().padStart(2, '0');
            document.querySelector('.time-unit:nth-child(3) .number').textContent = seconds.toString().padStart(2, '0');
            
            // If the countdown is finished, reset it
            if (distance < 0) {
                clearInterval(countdownTimer);
                // Reset to a new 2-hour countdown
                startCountdown();
            }
        }, 1000);
    }
    
    // Start the countdown
    startCountdown();
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchBar.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchBar.value.trim();
        if (searchTerm) {
            // In a real application, this would redirect to search results
            alert(`Searching for: ${searchTerm}`);
            // You could redirect to a search results page like this:
            // window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    // Product hover effect
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        card.addEventListener('click', function() {
            // In a real application, this would redirect to the product page
            const productName = this.querySelector('h3').textContent;
            alert(`You clicked on: ${productName}`);
            // You could redirect to a product page like this:
            // window.location.href = `product.html?id=${this.dataset.productId}`;
        });
    });
    
    // Banner slider functionality (for when you have multiple banners)
    let currentSlide = 0;
    const banners = ['banner1.jpg', 'banner2.jpg', 'banner3.jpg']; // Add your banner image names
    const bannerImage = document.querySelector('.slider img');
    
    function changeBanner() {
        currentSlide = (currentSlide + 1) % banners.length;
        // Fade out effect
        bannerImage.style.opacity = 0;
        
        setTimeout(() => {
            // Change the image source
            bannerImage.src = `images/${banners[currentSlide]}`;
            // Fade in effect
            bannerImage.style.opacity = 1;
        }, 500);
    }
    
    // Change banner every 5 seconds
    // Uncomment this when you have multiple banner images
    // setInterval(changeBanner, 5000);
    
    // Add to cart functionality
    const cartIcon = document.querySelector('.cart a');
    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Shopping cart clicked! In a real application, this would open your cart.');
        // You could redirect to a cart page like this:
        // window.location.href = 'cart.html';
    });
    
    // Notification functionality
    const notificationIcon = document.querySelector('.top-nav-right a:first-child');
    
    notificationIcon.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Notifications clicked! In a real application, this would show your notifications.');
    });
});