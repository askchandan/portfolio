// skills.js
// Rotating skill sphere animation logic

export function initializeSkillSphere() {
  const sphere = document.querySelector('.skill-sphere');
  let angle = 0;
  function rotateSphere() {
    angle += 0.5;
    sphere.style.transform = \`rotateY(\${angle}deg)\`;
    requestAnimationFrame(rotateSphere);
  }
  rotateSphere();
}