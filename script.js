document.addEventListener('DOMContentLoaded', () => {
    // --- Parallax & Hover Effect for Hero Image ---
    const heroImage = document.querySelector('.image-wrapper');
    const heroSection = document.querySelector('.hero-section');

    if (heroImage && heroSection && window.innerWidth > 1024) {
        heroSection.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
            
            heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroImage.style.transform = `rotateY(0deg) rotateX(0deg)`;
            heroImage.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        });
        
        heroSection.addEventListener('mouseenter', () => {
            heroImage.style.transition = "none";
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Intersection Observer for Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-nav');
    
    // Set initial delay for navbar so it fades in
    document.querySelector('.reveal-nav').classList.add('active');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
