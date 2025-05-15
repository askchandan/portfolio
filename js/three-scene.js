// Three.js Scene Setup
let scene, camera, renderer, particles;
const particleCount = 2000;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(particleCount * 3);
const particleSizes = new Float32Array(particleCount);

// Initialize the scene
function init() {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#hero-canvas'),
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    createParticles();
    
    // Add event listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    
    // Start animation loop
    animate();
}

// Create particle system
function createParticles() {
    // Create particle positions
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particlePositions[i3] = (Math.random() - 0.5) * 10;
        particlePositions[i3 + 1] = (Math.random() - 0.5) * 10;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 10;
        particleSizes[i] = Math.random() * 2;
    }
    
    // Set particle attributes
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
        color: 0x6C63FF,
        size: 0.05,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });
    
    // Create particle system
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
}

// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Handle mouse movement
function onMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Rotate particles based on mouse position
    particles.rotation.x = mouseY * 0.5;
    particles.rotation.y = mouseX * 0.5;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles
    particles.rotation.x += 0.0005;
    particles.rotation.y += 0.0005;
    
    // Update particle positions
    const positions = particleGeometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(Date.now() * 0.001 + i) * 0.001;
    }
    particleGeometry.attributes.position.needsUpdate = true;
    
    // Render scene
    renderer.render(scene, camera);
}

// Initialize scene when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Add water wave effect
function createWaterWave() {
    const waveGeometry = new THREE.PlaneGeometry(10, 10, 32, 32);
    const waveMaterial = new THREE.MeshPhongMaterial({
        color: 0x6C63FF,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });
    
    const wave = new THREE.Mesh(waveGeometry, waveMaterial);
    wave.rotation.x = -Math.PI / 2;
    wave.position.y = -2;
    scene.add(wave);
    
    // Animate wave
    function animateWave() {
        const time = Date.now() * 0.001;
        const vertices = waveGeometry.attributes.position.array;
        
        for (let i = 0; i < vertices.length; i += 3) {
            vertices[i + 2] = Math.sin(time + vertices[i] * 0.5) * 0.2;
        }
        
        waveGeometry.attributes.position.needsUpdate = true;
        requestAnimationFrame(animateWave);
    }
    
    animateWave();
}

// Add lighting
function addLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x6C63FF, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
}

// Initialize additional effects
function initEffects() {
    createWaterWave();
    addLighting();
}

// Call initEffects after scene initialization
document.addEventListener('DOMContentLoaded', () => {
    init();
    initEffects();
}); 