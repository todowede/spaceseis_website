// About page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animate approach items on scroll
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
    
    // Observe approach items
    document.querySelectorAll('.approach-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });
});
