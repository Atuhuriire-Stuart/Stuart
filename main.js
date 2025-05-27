// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page refresh

        var formData = new FormData(this);

        fetch(this.action, {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for your message! I will get back to you soon.");
                this.reset(); // Clear the form after successful submission
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Error: " + error);
        });
    });
}
// Mobile menu toggle (you can add this functionality if needed)
// const menuToggle = document.createElement('div');
// menuToggle.classList.add('menu-toggle');
// menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
// document.querySelector('header .container').appendChild(menuToggle);
