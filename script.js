document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ Script cargado correctamente"); // Verifica si el JS se está ejecutando

  const heart = document.querySelector('.heart');

  // Verificar si el corazón existe
  if (!heart) {
    console.error("❌ No se encontró el elemento '.heart'");
    return;
  } else {
    console.log("💛 Elemento '.heart' encontrado:", heart);
  }

  // Detectar clic en el corazón
  heart.addEventListener('click', (e) => {
    console.log("💛 Clic detectado en el corazón en:", e.clientX, e.clientY);

    // Crear 15 partículas doradas
    for (let i = 0; i < 15; i++) {
      createParticle(e.clientX, e.clientY);
    }

    // Redirigir a index2.html después de 0.5 segundos
    setTimeout(() => {
      console.log("🌍 Redirigiendo a index2.html...");
      window.location.href = "index2.html";
    }, 500);
  });

  // Función para crear partículas
  function createParticle(x, y) {
    console.log("✨ Creando partícula en posición:", x, y);

    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Posición inicial
    particle.style.position = "absolute";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.background = "#FFD700";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.transition = "transform 1.5s ease-out, opacity 1.5s ease-out";

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
      console.log("🗑️ Eliminando partícula");
      particle.remove();
    }, 1500);
  }
});
