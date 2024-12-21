function rotate() {
    console.log("rotate function executed");
    var hamburgerIcon = document.getElementById("your-mum");
    
    if (hamburgerIcon.style.transform ==="rotate(-90deg)") {
        hamburgerIcon.style.transform = "rotate(0deg)";
    } else {
        hamburgerIcon.style.transform = "rotate(-90deg)";
    }
    hamburgerIcon.style.transition = "transform 1s linear";
}
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
        // Show/hide  header
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
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    let isAnimating = false;
    let intervalId = null;  // Declare intervalId only once at the top level

    function rotateTestimonials() {
        if (isAnimating) return;
        isAnimating = true;

        // Add hide class to current testimonial
        testimonials[currentTestimonial].classList.add('hide');
        testimonials[currentTestimonial].classList.remove('show');

        // Calculate next testimonial
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;

        // Wait for hide animation to complete
        setTimeout(() => {
            // Remove all classes
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('hide');
                testimonial.classList.remove('show');
            });
            
            // Show next testimonial
            testimonials[currentTestimonial].classList.add('show');
            isAnimating = false;
        }, 1000); // Match this with CSS transition duration
    }

    // Initial setup
    if (testimonials.length > 0) {
        // Show first testimonial
        testimonials[0].classList.add('show');
        
        // Start rotation
        intervalId = setInterval(rotateTestimonials, 5000);
    }
    testimonials.forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            if (testimonial.classList.contains('show') && intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        });
    
        testimonial.addEventListener('mouseleave', () => {
            if (!intervalId) {
                intervalId = setInterval(rotateTestimonials, 5000);
            }
        });
});

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
    function smoothScrollTo(targetId, duration = 1000) {
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
    
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;
        const disableScrollListener = () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    
        const enableScrollListener = () => {
            window.addEventListener('scroll', scrollHandler);
        };
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                // Re-enable scroll listener after animation completes
                enableScrollListener();
            }
        }
    
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        // Temporarily disable scroll listener
        disableScrollListener();
        requestAnimationFrame(animation);
        // Existing scroll handler (updateHeaderTransformation or other logic)
    function scrollHandler() {
        updateHeaderTransformation();
        // Add scroll listener
    window.addEventListener('scroll', scrollHandler);
    }
    }
    
    // Usage:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScrollTo(targetId, 1500); // Set duration in milliseconds
        });
    });
    
    
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