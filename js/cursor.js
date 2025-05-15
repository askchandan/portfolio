// Custom cursor implementation
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

// Cursor movement with latency
function animateCursor() {
    // Calculate cursor position with easing
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    // Calculate follower position with more latency
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;
    
    // Apply positions
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    
    requestAnimationFrame(animateCursor);
}

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Cursor effects on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-card');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
        cursorFollower.style.backgroundColor = 'rgba(108, 99, 255, 0.1)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
        cursorFollower.style.backgroundColor = 'rgba(108, 99, 255, 0.2)';
    });
});

// Water wave effect on cursor
function createWaterWave(x, y) {
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    document.body.appendChild(wave);
    
    // Remove wave after animation
    setTimeout(() => {
        wave.remove();
    }, 1000);
}

// Add water wave effect on click
document.addEventListener('click', (e) => {
    createWaterWave(e.clientX, e.clientY);
});

// Initialize cursor animation
animateCursor();

// Hide cursor when leaving window
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Add magnetic effect to buttons
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0px, 0px)';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;
    
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - rect.left - radius}px`;
    ripple.style.top = `${event.clientY - rect.top - radius}px`;
    ripple.className = 'ripple';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

magneticButtons.forEach(button => {
    button.addEventListener('click', createRipple);
}); 