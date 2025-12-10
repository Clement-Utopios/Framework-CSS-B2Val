// ============================================
// BOOTSTRAP 5 - JAVASCRIPT PRINCIPAL
// ============================================

import * as bootstrap from 'bootstrap';
import '../scss/styles.scss';

// Navbar scroll effect
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled', 'navbar-light');
    navbar.classList.remove('navbar-dark');
  } else {
    navbar.classList.remove('scrolled', 'navbar-light');
    navbar.classList.add('navbar-dark');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Fade in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .pricing-card, .stat-item').forEach(el => {
  el.classList.add('fade-in-up');
  observer.observe(el);
});

// Form validation example
document.querySelector('form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Envoi...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = '<i class="bi bi-check-lg me-2"></i>Message envoyé !';
    btn.classList.replace('btn-primary', 'btn-success');
    setTimeout(() => {
      this.reset();
      btn.innerHTML = originalText;
      btn.classList.replace('btn-success', 'btn-primary');
      btn.disabled = false;
    }, 2000);
  }, 1500);
});

console.log('%c🎨 Bootstrap 5 Demo', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cFormation Frameworks CSS - Utopios', 'color: #64748b;');
