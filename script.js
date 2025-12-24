document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startButton');
  const lights = Array.from(document.querySelectorAll('.light'))
    .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
  const finalMessage = document.getElementById('finalMessage');

  let running = false;

  button.addEventListener('click', () => {
    if (running) return;
    running = true;

    let i = 0;
    const interval = setInterval(() => {
      if (i < lights.length) {
        // Alternar parpadeo rápido y lento
        lights[i].classList.add('on');
        if (i % 2 === 0) {
          lights[i].classList.add('fast');
        } else {
          lights[i].classList.add('slow');
        }
        i++;
      } else {
        clearInterval(interval);

        // Mostrar mensaje final con glow
        setTimeout(() => {
          finalMessage.classList.add('show');
          finalMessage.setAttribute('aria-hidden', 'false');
          running = false;
        }, 1000);
      }
    }, 250); // Velocidad de encendido (ms)
  });
});
