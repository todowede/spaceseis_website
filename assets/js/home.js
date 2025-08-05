// Home page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hero Carousel Functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentSlide = 0;
    let slideInterval;

    // Function to instantly position slides without animation
    function setSlidePosition(slide, position) {
        slide.style.transition = 'none';
        slide.style.transform = `translateX(${position}%)`;
        // Force reflow
        slide.offsetHeight;
        slide.style.transition = 'transform 1.0s ease';
    }

    // Function to position all slides
    function positionSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            
            if (index === currentSlide) {
                // Active slide - center
                slide.style.transform = 'translateX(0%)';
                slide.classList.add('active');
            } else if (index === (currentSlide + 1) % slides.length) {
                // Next slide - right
                slide.style.transform = 'translateX(100%)';
            } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
                // Previous slide - left  
                slide.style.transform = 'translateX(-100%)';
            } else {
                // Other slides - hidden far right
                setSlidePosition(slide, 200);
            }
        });
        
        // Update indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    // Next slide function
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        
        // Position the incoming slide instantly on the left before animation
        setSlidePosition(slides[nextIndex], -100);
        
        // Small delay to ensure positioning, then animate
        setTimeout(() => {
            currentSlide = nextIndex;
            positionSlides();
        }, 10);
    }

    // Previous slide function  
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        
        // Position the incoming slide instantly on the right before animation
        setSlidePosition(slides[prevIndex], 100);
        
        // Small delay to ensure positioning, then animate
        setTimeout(() => {
            currentSlide = prevIndex;
            positionSlides();
        }, 10);
    }

    // Initialize
    positionSlides();

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-advance
    // function startSlideshow() {
     //     slideInterval = setInterval(nextSlide, 8000);
    //  }

    // startSlideshow();
    
    // Service card click handlers
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.dataset.service;
            let url = '';
            
            switch(service) {
                case 'earth-observation':
                    url = 'earth-observation.html';
                    break;
                case 'subsurface':
                    url = 'subsurface-analytics.html';
                    break;
                case 'ai':
                    url = 'ai-data-science.html';
                    break;
            }
            
            if (url) {
                window.location.href = url;
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe service cards and feature items
    document.querySelectorAll('.service-card, .feature').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
