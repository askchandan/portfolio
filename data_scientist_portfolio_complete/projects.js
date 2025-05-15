// projects.js
// Handles 3D project cards and filtering logic

export function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      projectCards.forEach(card => {
        const matches = card.classList.contains(category) || category === 'all';
        card.style.display = matches ? 'block' : 'none';
      });
    });
  });
}