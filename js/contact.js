document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('customForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Form submission logic would go here
            console.log('Form submitted:', {
                name: name,
                email: email,
                phone: document.getElementById('phone').value.trim(),
                service: document.getElementById('service').value,
                message: document.getElementById('message').value.trim()
            });
            
            // In a real implementation, you would submit to your form handler
            // This is where the data-form-handler would be used
        });
    }
    
    // Enhance phone links for better mobile interaction
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Analytics or tracking could go here
            console.log('Phone number clicked:', this.getAttribute('href'));
        });
    });
});