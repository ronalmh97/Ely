document.addEventListener('DOMContentLoaded', () => {
  const heart = document.querySelector('.heart');

  // Detectar clic en el corazón
  heart.addEventListener('click', (e) => {
    // Crear 15 partículas doradas
    for (let i = 0; i < 15; i++) {
      createParticle(e.clientX, e.clientY);
    }
  });

  // Función para crear partículas
  function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Posición inicial
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Dirección aleatoria
    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 40;
    const finalX = Math.cos(angle) * distance;
    const finalY = Math.sin(angle) * distance;

    // Tamaño aleatorio
    const size = Math.random() * 6 + 4; // entre 4px y 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Animación
    requestAnimationFrame(() => {
      particle.style.transform = `translate(${finalX}px, ${finalY}px)`;
      particle.style.opacity = 0;
    });

    // Eliminar partícula después de 1.5s
    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
});
