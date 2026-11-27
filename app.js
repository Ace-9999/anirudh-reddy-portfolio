const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('js-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
window.addEventListener('resize', updateProgress); updateProgress();
const portrait = document.querySelector('[data-tilt]');
portrait?.addEventListener('pointermove', event => {
  if (reducedMotion.matches || event.pointerType !== 'mouse') return;
  const rect = portrait.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - .5;
  const y = (event.clientY - rect.top) / rect.height - .5;
  portrait.style.transform = `perspective(900px) rotate(3deg) rotateY(${x * 12}deg) rotateX(${-y * 10}deg)`;
});
portrait?.addEventListener('pointerleave', () => { portrait.style.transform = ''; });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email')?.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('anirudh.reddy6002@gmail.com'); status.textContent = 'Copied!'; }
  catch { status.textContent = 'Select the email address to copy it.'; }
  setTimeout(() => { status.textContent = ''; }, 4000);
});
