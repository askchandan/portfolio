// heroScene.js
// Initializes a 3D animated hero scene with particles using Three.js

import * as THREE from 'three';

export function initializeHeroScene(canvasId) {
  const canvas = document.getElementById(canvasId);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const particles = new THREE.BufferGeometry();
  const count = 1000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({ size: 0.05, color: 0x00ffff });
  const pointCloud = new THREE.Points(particles, material);
  scene.add(pointCloud);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);
    pointCloud.rotation.y += 0.001;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}