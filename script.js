document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('scale-105');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('scale-105');
  });
});
