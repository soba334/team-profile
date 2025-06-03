const smoke = document.getElementById('smoke-layer');
let lastX = 0;
let lastY = 0;
let hueShift = 0;

document.addEventListener('mousemove', (e) => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  hueShift = (hueShift + dist * 0.5) % 360;

  const xPercent = (e.clientX / window.innerWidth) * 100;
  const yPercent = (e.clientY / window.innerHeight) * 100;

  smoke.style.background = `
    radial-gradient(circle at ${xPercent}% ${yPercent}%,
      hsla(${(hueShift + 0) % 360}, 100%, 85%, 0.4),
      hsla(${(hueShift + 60) % 360}, 100%, 85%, 0.3),
      hsla(${(hueShift + 120) % 360}, 100%, 85%, 0.2),
      transparent 60%)
  `;

  lastX = e.clientX;
  lastY = e.clientY;
});
