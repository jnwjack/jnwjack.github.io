// Set focus to appropriate link when its section is in view
const iO = new IntersectionObserver(entries => entries.forEach(entry => {
  const hash = '#'+entry.target.id;
  const navEl = document.querySelector(`a[href="${hash}"]`);
  navEl.classList.toggle('focus', entry.isIntersecting && entry.intersectionRatio > 0.5)
}), {
  root: document.querySelector(`main`),
  threshold: 0.5
});

sections = Array.from(document.querySelectorAll('section'))
window.addEventListener('DOMContentLoaded', () => sections.map(a => iO.observe(a)));