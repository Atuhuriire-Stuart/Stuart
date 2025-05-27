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
//form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page refresh

        var formData = new FormData(this);

        fetch(this.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" } // This ensures a JSON response
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Message sent successfully! Thank you for reaching out.");
                this.reset(); // Clears the form fields
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("Error: " + error);
        });
    });
}
