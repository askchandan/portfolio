// filters.js
// Optional logic for dynamic filtering or searching

export function setupSearchFilter(inputId, cardClass) {
  const input = document.getElementById(inputId);
  const cards = document.querySelectorAll(cardClass);
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    cards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(value) ? 'block' : 'none';
    });
  });
}