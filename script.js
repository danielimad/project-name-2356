// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Basic validation
    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If valid, simulate form submission (e.g., with an alert)
    alert('Thank you for your message. We will get back to you soon.');

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});