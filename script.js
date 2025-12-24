document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startButton');
  const lights = Array.from(document.querySelectorAll('.light'))
    .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
  const finalMessage = document.getElementById('finalMessage');

  let running = false;

  button.addEventListener('click', () => {
    if (running) return;
    running = true;

    // Secuencia: encender una a una
    let i = 0;
    const interval = setInterval(() => {
      if (i < lights.length) {
        lights[i].classList.add('on');
        i++;
      } else {
        clearInterval(interval);

        // Pequeña pausa antes del mensaje final
        setTimeout(() => {
          finalMessage.classList.add('show');
          finalMessage.setAttribute('aria-hidden', 'false');
          running = false;
        }, 600);
      }
    }, 180); // Velocidad de encendido (ms)
  });
});
