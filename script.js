document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            mobileNavToggle.setAttribute('aria-expanded', 
                navMenu.classList.contains('show').toString()
            );
        });
    }

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu after selecting a link
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    const heroCover = document.getElementById('hero-cover');
    const heroContent = heroCover.querySelector('.hero-cover-content');
    const fixedHeader = document.getElementById('fixed-header');
    
    // Initial state
    fixedHeader.style.opacity = '0';

    function updateHeaderTransformation() {
        // Get scroll position and viewport height
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Calculate progress (0 to 1)
        const progress = Math.min(scrollPosition / viewportHeight, 1);
        fixedHeader.style.display = 'block'; // Ensure it's not 'none'
        fixedHeader.style.visibility = 'visible'; // Ensure it's not 'hidden'
        // Show/hide fixed header
        fixedHeader.style.opacity = progress*2;
        
        // Transform hero cover based on scroll progress
        const scaleValue = 1 - (progress * 0.3); // Scale from 1 to 0.7
        const heightValue = 100 - (progress * 80); // Height from 100vh to 80px
        
        // Apply transformations
        heroCover.style.transform = `scale(${scaleValue})`;
        heroCover.style.opacity = 1 - progress;
        heroCover.style.height = `${heightValue}vh`;
        
        // Transform hero content
        heroContent.style.transform = `scale(${1 - progress * 0.5})`;
        heroContent.style.transform = `scale(${1 - progress * 0.5})`;
        heroContent.style.opacity = 1 - progress;
    }

    // Add scroll event listener with requestAnimationFrame for smooth animation
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateHeaderTransformation();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call to set correct state
    updateHeaderTransformation();
    });
    let timer;
    window.addEventListener('scroll', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log('Scroll event triggered!');
        }, 100);
    });


    // Optional: Existing smooth scrolling functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Testimonial Carousel
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function rotateTestimonials() {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });

        // Show current testimonial
        testimonials[currentTestimonial].style.display = 'block';

        // Move to next testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }

    // Initial setup
    if (testimonials.length > 0) {
        rotateTestimonials();
        // Rotate every 5 seconds
        setInterval(rotateTestimonials, 5000);
    }

    // Form Validation and Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form inputs
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Validate inputs
            const validateEmail = (email) => {
                const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return re.test(String(email).toLowerCase());
            };

            let isValid = true;
            
            // Name validation
            if (!nameInput.value.trim()) {
                isValid = false;
                nameInput.classList.add('error');
            } else {
                nameInput.classList.remove('error');
            }

            // Email validation
            if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
                isValid = false;
                emailInput.classList.add('error');
            } else {
                emailInput.classList.remove('error');
            }

            // Message validation
            if (!messageInput.value.trim()) {
                isValid = false;
                messageInput.classList.add('error');
            } else {
                messageInput.classList.remove('error');
            }

            // If all validations pass
            if (isValid) {
                // Simulate form submission (replace with actual submission logic)
                alert('Message sent successfully! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    
    // Portfolio Image Hover Effect
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const overlay = item.querySelector('.project-overlay');
        
        item.addEventListener('mouseenter', () => {
            if (overlay) {
                overlay.style.transform = 'translateY(0)';
            }
        });

        item.addEventListener('mouseleave', () => {
            if (overlay) {
                overlay.style.transform = 'translateY(100%)';
            }
        });
    });
;

// Optional: Performance Tracking
window.addEventListener('load', () => {
    console.log('Page fully loaded');
    
    // Measure and log performance
    if (performance && performance.now) {
        const loadTime = performance.now();
        console.log(`Page load took ${loadTime.toFixed(2)} milliseconds`);
    }
});