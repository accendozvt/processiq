/* ===== HAMBURGER MENU ===== */
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('nav-hamburger');
  var menu = document.querySelector('.nav-links');

  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  /* Close menu when a link is clicked */
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    });
  });

  /* Close menu when clicking outside */
  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    }
  });
});

/* ===== FAQ ACCORDION ===== */
function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

/* ===== CONTACT FORM SUBMIT ===== */
function handleSubmit() {
  alert('Thank you for your enquiry! Our team will contact you within 24 hours to schedule your free discovery call.');
}
