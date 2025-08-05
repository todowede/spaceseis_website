// AI & Data Science page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
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
    
    // Observe case study elements
    document.querySelectorAll('.methodology, .results, .visualizations').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
    
    // Add click handlers for visualization placeholders
    document.querySelectorAll('.viz-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            showNotification('AI model visualizations will be generated with training data', 'info');
        });
        
        placeholder.style.cursor = 'pointer';
        placeholder.style.transition = 'background-color 0.3s';
        
        placeholder.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e9ecef';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f0f0f0';
        });
    });
});
