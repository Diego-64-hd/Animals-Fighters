document.querySelectorAll(".tarjeta").forEach((tarjeta) => {
  const avatar = tarjeta.querySelector(".avatar");
  tarjeta.querySelectorAll("[data-accion]").forEach((boton) => {
    boton.addEventListener("click", () => {
      avatar.className = `avatar ${avatar.classList.contains("leon") ? "leon" : "raptor"} ${boton.dataset.accion}`;
      avatar.addEventListener("animationend", () => {
        avatar.classList.remove(boton.dataset.accion);
      }, { once: true });
    });
  });
});
