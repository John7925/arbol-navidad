document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('startButton');
  const lights = Array.from(document.querySelectorAll('.light'))
    .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
  const finalMessage = document.getElementById('finalMessage');

  let running = false;

  button.addEventListener('click', () => {
    if (running) return;
    running = true;

    // Secuencia: encender una a una de abajo hacia arriba
    let i = 0;
    const interval = setInterval(() => {
      if (i < lights.length) {
        lights[i].classList.add('on');
        i++;
      } else {
        clearInterval(interval);

        // Pausa antes de mostrar el mensaje final
        setTimeout(() => {
          finalMessage.classList.add('show');
          finalMessage.setAttribute('aria-hidden', 'false');
          running = false;
        }, 800);
      }
    }, 250); // Velocidad de encendido (ms)
  });
});
