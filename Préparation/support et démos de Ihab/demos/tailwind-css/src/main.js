// ============================================
// TAILWIND CSS - JAVASCRIPT PRINCIPAL
// Formation Frameworks CSS - Utopios
// ============================================

import './styles.css';

// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const html = document.documentElement;

// Check saved preference
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
}

darkToggle?.addEventListener('click', () => {
  html.classList.toggle('dark');
  localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  darkToggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.querySelector('input[placeholder*="Rechercher"]')?.focus();
  }
});

// Console welcome
console.log('%c🎨 Tailwind CSS Demo', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cFormation Frameworks CSS - Utopios', 'color: #64748b;');
