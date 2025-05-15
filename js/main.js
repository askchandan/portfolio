// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Loading screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            loadingScreen.style.display = 'none';
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70
            },
            ease: 'power2.inOut'
        });
    });
});

// Animate sections on scroll
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animate project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                gsap.to(project, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5
                });
            } else {
                gsap.to(project, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.5
                });
            }
        });
    });
});

// Animate skill bars
const skillBars = document.querySelectorAll('.skill-bar');

skillBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    gsap.to(bar, {
        width: `${progress}%`,
        duration: 1,
        scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Contact form validation and animation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Add loading animation
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.innerHTML = '<span class="loader"></span>';
    
    // Simulate form submission (replace with actual form submission)
    setTimeout(() => {
        submitButton.innerHTML = 'Message Sent!';
        submitButton.classList.add('success');
        
        // Reset form
        setTimeout(() => {
            contactForm.reset();
            submitButton.innerHTML = 'Send Message';
            submitButton.classList.remove('success');
        }, 2000);
    }, 1500);
});

// Parallax effect for hero section
gsap.to('.hero-content', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Animate timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    gsap.from(item, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Add hover effect to project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Animate social links
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            scale: 1.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
}); 