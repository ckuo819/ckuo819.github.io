(() => {
  const control = document.querySelector('.petal-control');
  if (!control) return;
  const label = control.querySelector('span');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateMotion = () => { control.hidden = motion.matches; };

  control.addEventListener('click', () => {
    const paused = document.body.classList.toggle('petals-paused');
    label.textContent = paused ? 'Resume petals' : 'Pause petals';
  });
  document.addEventListener('visibilitychange', () => {
    document.body.classList.toggle('petals-away', document.hidden);
  });
  motion.addEventListener('change', updateMotion);
  updateMotion();
  document.body.classList.add('sakura-ready');
})();
