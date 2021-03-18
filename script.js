// Set focus to appropriate link when its section is in view
const iO = new IntersectionObserver(entries => entries.forEach(entry => {
  const hash = '#'+entry.target.id;
  const navEl = document.querySelector(`a[href="${hash}"]`);
  navEl.classList.toggle('focus', entry.isIntersecting && entry.intersectionRatio > 0.5)
}), {
  root: document.querySelector(`main`),
  threshold: 0.5
});

panels = Array.from(document.querySelectorAll('article'))
window.addEventListener('DOMContentLoaded', () => panels.map(a => iO.observe(a)));

function insertBookingEngine() {
  // Add script to insert widget
  let script = document.createElement('script');
  script.id = 'booking-engine-script';
  script.src = 'https://umi-booking-engine.herokuapp.com/embed.js';
  document.body.appendChild(script);

  // Change button callback to function that removes widget
  let cardLink = document.querySelector('#bookingengine .card-link');
  cardLink.onclick = removeBookingEngine;
  cardLink.textContent = "Remove Widget";
}

function removeBookingEngine() {
  // Remove script and widget
  document.getElementById('booking-engine-script').remove();
  document.getElementById('booking-widget').remove();

  // Change button callback to function that inserts widget
  let cardLink = document.querySelector('#bookingengine .card-link');
  cardLink.onclick = insertBookingEngine;
  cardLink.textContent = "View it Here";
}