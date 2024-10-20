// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll change effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('#home h1', {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5,
        ease: 'power4.out'
    });

    gsap.from('#home p', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1,
        ease: 'power4.out'
    });

    gsap.from('#home a', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 1.5,
        ease: 'power4.out'
    });

    // Scroll Trigger animations for other sections
    gsap.utils.toArray('.reveal').forEach(function (elem) {
        ScrollTrigger.create({
            trigger: elem,
            start: "top 80%",
            onEnter: () => {
                gsap.to(elem, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
            }
        });
    });

    // About Section animation
    gsap.from("#about h2", {
        scrollTrigger: "#about",
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from("#about p", {
        scrollTrigger: "#about",
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3
    });

    // Courses Section animation
    gsap.from(".course-card", {
        scrollTrigger: "#courses",
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5
    });

    // Contact form animation
    gsap.from("#contactForm", {
        scrollTrigger: "#contact",
        opacity: 0,
        y: 50,
        duration: 1
    });

    // Smooth Scroll for Navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Contact Form Submit Event
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        successMessage.innerHTML = 'Your message has been sent!';
        errorMessage.innerHTML = ''; // Clear error messages if any

        // Reset form
        contactForm.reset();
    });
});

// Enable horizontal scrolling with mouse wheel
const testimonialContainer = document.getElementById('container');

testimonialContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent the default scroll behavior
    testimonialContainer.scrollLeft += event.deltaY; // Scroll horizontally based on vertical scroll
});
