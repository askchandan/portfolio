// experience.js
// Sets up animations and layout behavior for the timeline

export function animateExperienceTimeline() {
  const items = document.querySelectorAll('.timeline-item');
  items.forEach((item, index) => {
    item.style.animationDelay = \`\${index * 0.3}s\`;
    item.classList.add('fade-in-left');
  });
}