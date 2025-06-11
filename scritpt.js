
document.addEventListener("DOMContentLoaded", () => {
  // Navegación suave entre secciones

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Aquí puedes agregar futuras funciones JS si lo deseas
});
