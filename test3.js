try {

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Navbar Toggle
    const nav = document.querySelector('nav ul');
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '☰';
    toggleBtn.classList.add('nav-toggle');
    document.querySelector('header nav').prepend(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.carousel .testimonial');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('visible');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('visible');
    }

    setInterval(showNextTestimonial, 3000);

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields!');
        } else {
            alert('Your message has been sent successfully!');
            form.reset();
        }
    });
});
} catch (error) { 
    console.error("Error in test3.js", error);
}

// console.log("test3.js loaded successfully!");
// alert("JavaScript is working!");
