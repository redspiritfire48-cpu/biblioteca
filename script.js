document.querySelectorAll('.details-toggle').forEach((toggle) => {
  const target = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!target) return;

  target.hidden = true;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    target.hidden = expanded;
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = contactForm?.querySelector('.form-status');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formStatus) {
    formStatus.textContent = 'Grazie, la tua richiesta e stata registrata.';
  }
  contactForm.reset();
});
