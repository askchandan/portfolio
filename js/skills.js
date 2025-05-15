// Skills data
const skills = [
    {
        name: 'Python',
        level: 90,
        category: 'Programming',
        icon: 'fab fa-python'
    },
    {
        name: 'Machine Learning',
        level: 85,
        category: 'AI/ML',
        icon: 'fas fa-brain'
    },
    {
        name: 'Data Analysis',
        level: 88,
        category: 'Data Science',
        icon: 'fas fa-chart-bar'
    },
    {
        name: 'Deep Learning',
        level: 82,
        category: 'AI/ML',
        icon: 'fas fa-network-wired'
    },
    {
        name: 'SQL',
        level: 85,
        category: 'Database',
        icon: 'fas fa-database'
    },
    {
        name: 'TensorFlow',
        level: 80,
        category: 'Frameworks',
        icon: 'fas fa-cube'
    },
    {
        name: 'PyTorch',
        level: 75,
        category: 'Frameworks',
        icon: 'fas fa-fire'
    },
    {
        name: 'Data Visualization',
        level: 85,
        category: 'Data Science',
        icon: 'fas fa-chart-line'
    }
];

// Initialize Three.js scene for skills sphere
let scene, camera, renderer, sphere;
const tags = [];

function initSkillsSphere() {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    const container = document.getElementById('skills-sphere');
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);
    
    // Create sphere
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshPhongMaterial({
        color: 0x6C63FF,
        transparent: true,
        opacity: 0.3,
        wireframe: true
    });
    sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x6C63FF, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    // Create skill tags
    createSkillTags();
    
    // Add event listeners
    window.addEventListener('resize', onWindowResize);
    container.addEventListener('mousemove', onMouseMove);
    
    // Start animation
    animate();
}

// Create skill tags
function createSkillTags() {
    const container = document.getElementById('skills-sphere');
    const radius = 2.5;
    
    skills.forEach((skill, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        const tag = document.createElement('div');
        tag.className = 'skill-tag';
        tag.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;
        
        tag.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        container.appendChild(tag);
        tags.push({ element: tag, x, y, z });
    });
}

// Handle window resize
function onWindowResize() {
    const container = document.getElementById('skills-sphere');
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
}

// Handle mouse movement
function onMouseMove(event) {
    const container = document.getElementById('skills-sphere');
    const rect = container.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / container.offsetWidth) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / container.offsetHeight) * 2 + 1;
    
    sphere.rotation.x = mouseY * 0.5;
    sphere.rotation.y = mouseX * 0.5;
    
    tags.forEach(tag => {
        const { element, x, y, z } = tag;
        const rotationX = mouseY * 0.5;
        const rotationY = mouseX * 0.5;
        
        const newX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
        const newZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
        const newY = y * Math.cos(rotationX) - newZ * Math.sin(rotationX);
        
        element.style.transform = `translate3d(${newX}px, ${newY}px, ${newZ}px)`;
        element.style.opacity = (newZ + 2.5) / 5;
    });
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    sphere.rotation.x += 0.001;
    sphere.rotation.y += 0.001;
    
    renderer.render(scene, camera);
}

// Create skill bars
function createSkillBars() {
    const skillsContainer = document.querySelector('.skills-details');
    
    skills.forEach(skill => {
        const skillBar = document.createElement('div');
        skillBar.className = 'skill-item';
        
        skillBar.innerHTML = `
            <div class="skill-info">
                <i class="${skill.icon}"></i>
                <span>${skill.name}</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar" data-progress="${skill.level}">
                    <div class="skill-progress"></div>
                </div>
                <span class="skill-level">${skill.level}%</span>
            </div>
        `;
        
        skillsContainer.appendChild(skillBar);
    });
}

// Initialize skills section
document.addEventListener('DOMContentLoaded', () => {
    initSkillsSphere();
    createSkillBars();
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.querySelector('.skill-progress').style.width = `${progress}%`;
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => observer.observe(bar));
}); 