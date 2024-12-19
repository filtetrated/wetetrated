// // try {

// // document.addEventListener("DOMContentLoaded", () => {
// //     // Smooth Scrolling for Navbar Links
// //     document.querySelectorAll('nav a').forEach(anchor => {
// //         anchor.addEventListener('click', function (e) {
// //             e.preventDefault();
// //             document.querySelector(this.getAttribute('href')).scrollIntoView({
// //                 behavior: 'smooth'
// //             });
// //         });
// //     });

// //     // Responsive Navbar Toggle
// //     const nav = document.querySelector('nav ul');
// //     const toggleBtn = document.createElement('button');
// //     toggleBtn.textContent = '☰';
// //     toggleBtn.classList.add('nav-toggle');
// //     document.querySelector('header nav').prepend(toggleBtn);

// //     toggleBtn.addEventListener('click', () => {
// //         nav.classList.toggle('show');
// //     });

// //     // Testimonial Carousel
// //     const testimonials = document.querySelectorAll('.carousel .testimonial');
// //     let currentTestimonial = 0;

// //     function showNextTestimonial() {
// //         testimonials[currentTestimonial].classList.remove('visible');
// //         currentTestimonial = (currentTestimonial + 1) % testimonials.length;
// //         testimonials[currentTestimonial].classList.add('visible');
// //     }
    
// //     setInterval(showNextTestimonial, 5000);

// //     // Form Validation
// //     const form = document.querySelector('form');
// //     form.addEventListener('submit', (e) => {
// //         e.preventDefault();
// //         const name = form.name.value.trim();
// //         const email = form.email.value.trim();
// //         const message = form.message.value.trim();

// //         if (!name || !email || !message) {
// //             alert('Please fill out all fields!');
// //         } else {
// //             alert('Your message has been sent successfully!');
// //             form.reset();
// //         // On Scroll Animation
// //         const animatedElements = document.querySelectorAll('.animate-on-scroll');

// //         function checkScrollAnimations() {
// //             const triggerHeight = window.innerHeight * 0.8;
    
// //             animatedElements.forEach(element => {
// //                 const elementTop = element.getBoundingClientRect().top;
// //                 if (elementTop < triggerHeight) {
// //                     element.classList.add('visible');
// //                 } else {
// //                     element.classList.remove('visible');
// //                 }
// //             });
// //         }
    
// //         window.addEventListener('scroll', checkScrollAnimations);
// //         checkScrollAnimations(); // Run on load to catch already visible elements
// //         }
// //     });
// // });
// // } catch (error) { 
// //     console.error("Error in test3.js", error);
// // }

// // // console.log("test3.js loaded successfully!");
// // // alert("JavaScript is working!");
// document.addEventListener("DOMContentLoaded", () => {
//     const cover = document.getElementsByClassName('cover');
//     const fixedHeader = document.getElementsByClassName('fixed-header');
//     function handleScroll() {
//         // Height at which cover starts to transform
//         const triggerHeight = window.innerHeight * 0.7;
        
//         // Get current scroll position
//         const scrollPosition = window.scrollY;

//         if (scrollPosition >= triggerHeight) {
//             // Transform cover
//             cover.style.transform = `scale(0.8)`;
//             cover.style.opacity = '0';
//             cover.style.pointerEvents = 'none';

//             // Show fixed header
//             fixedHeader.classList.add('visible');
//         } else {
//             // Revert cover
//             cover.style.transform = 'scale(1)';
//             cover.style.opacity = '1';
//             cover.style.pointerEvents = 'auto';

//             // Hide fixed header
//             fixedHeader.classList.remove('visible');
//         }
//     }

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
//     try {
//         // Smooth Scrolling for Navbar Links
//         document.querySelectorAll('nav a').forEach(anchor => {
//             anchor.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 document.querySelector(this.getAttribute('href')).scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             });
//         });

//         // Responsive Navbar Toggle
//         const nav = document.querySelector('nav ul');
//         const toggleBtn = document.createElement('button');
//         toggleBtn.textContent = '☰';
//         toggleBtn.classList.add('nav-toggle');
//         document.querySelector('header nav').prepend(toggleBtn);
//         toggleBtn.addEventListener('click', () => {
//             nav.classList.toggle('show');
//         });

//         // Testimonial Carousel
//         const testimonials = document.querySelectorAll('.carousel .testimonial');
//         let currentTestimonial = 0;
//         function showNextTestimonial() {
//             testimonials[currentTestimonial].classList.remove('visible');
//             currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//             testimonials[currentTestimonial].classList.add('visible');
//         }
        
//         setInterval(showNextTestimonial, 5000);

//         // Form Validation
//         const form = document.querySelector('form');
//         form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             const name = form.name.value.trim();
//             const email = form.email.value.trim();
//             const message = form.message.value.trim();
//             if (!name || !email || !message) {
//                 alert('Please fill out all fields!');
//             } else {
//                 alert('Your message has been sent successfully!');
//                 form.reset();
//             }
//         });

//         // On Scroll Animation
//         const animatedElements = document.querySelectorAll('.animate-on-scroll');
        
//         function checkScrollAnimations() {
//             const triggerHeight = window.innerHeight * 0.8;

//             animatedElements.forEach(element => {
//                 const elementTop = element.getBoundingClientRect().top;
//                 const elementBottom = element.getBoundingClientRect().bottom;

//                 // Check if the element is in the viewport
//                 if (elementTop < triggerHeight && elementBottom > 0) {
//                     element.classList.add('visible');
//                 } else {
//                     element.classList.remove('visible');
//                 }
//             });
//         }

//         // Debounce function to improve performance
//         function debounce(func, delay) {
//             let timeoutId;
//             return function() {
//                 const context = this;
//                 const args = arguments;
//                 clearTimeout(timeoutId);
//                 timeoutId = setTimeout(() => {
//                     func.apply(context, args);
//                 }, delay);
//             };
//         }

//         // Add scroll event listener with debounce
//         window.addEventListener('scroll', debounce(checkScrollAnimations, 50));
        
//         // Run on load to catch already visible elements
//         checkScrollAnimations();

//         console.log("Scroll animations initialized successfully!");
//     } catch (error) {
//         console.error("Error in script initialization:", error);
//     }

// });

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
        
        // Transform hero cover based on scroll progress
        const scaleValue = 1 - (progress * 0.3); // Scale from 1 to 0.7
        const heightValue = 100 - (progress * 80); // Height from 100vh to 80px
        
        // Apply transformations
        heroCover.style.transform = `scale(${scaleValue})`;
        heroCover.style.opacity = 1 - progress;
        heroCover.style.height = `${heightValue}vh`;
        
        // Transform hero content
        heroContent.style.transform = `scale(${1 - progress * 0.5})`;
        heroContent.style.opacity = 1 - progress;
        
        // Show/hide fixed header
        fixedHeader.style.opacity = progress;
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