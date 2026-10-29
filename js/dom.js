const battleLog = document.getElementById("battle-log");
const mensajeInicial = document.getElementById("mnsjInicial");
const botonInicio = document.getElementById("boton-star");
const textoInicio = document.getElementById("star-1");
const pantallaInicio = document.getElementById("battle-1");
const pantallaModos = document.getElementById("modos");
const pantallaPersonajes = document.getElementById("seleccionpj");
const pantallaDificultad = document.getElementById("dificultad");

function escribirTexto(texto) {
    mensajeInicial.remove();
    const mensaje = document.createElement("p");
    mensaje.textContent = texto;
    battleLog.appendChild(mensaje);
}

let cargando = false;

function mostrarPantalla(destino) {
  if (cargando) return;
  cargando = true;
  botonInicio.disabled = true;
  textoInicio.textContent = "░".repeat(16);
  let progreso = 0;
  const intervalo = setInterval(() => {
    progreso++;
    textoInicio.textContent = "█".repeat(progreso) + "░".repeat(16 - progreso);

    if (progreso >= 16) {
      clearInterval(intervalo);
      pantallaInicio.style.display = "none";
      pantallaModos.style.display = "none";
      pantallaPersonajes.style.display = "none";
      destino.style.display = "flex";
      textoInicio.textContent = "Or press Enter key to start";
      botonInicio.disabled = false;
      cargando = false;
    }
  }, 50);
}

botonInicio.addEventListener("click", () => mostrarPantalla(pantallaModos));

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && pantallaInicio.style.display !== "none") {
    event.preventDefault();
    mostrarPantalla(pantallaModos);
  }
});

document.querySelectorAll("#btn-rapida, #btn-torneo").forEach((boton) => {
  boton.addEventListener("click", () => mostrarPantalla(pantallaPersonajes));
});

document.querySelectorAll(".boton-elegir").forEach((boton) => {
  boton.addEventListener("click", () => {
    document.querySelectorAll(".boton-elegir").forEach((otroBoton) => {
      otroBoton.setAttribute("aria-pressed", String(otroBoton === boton));
    });

    const personaje = boton.dataset.personaje;
    const nombre = personaje === "leon" ? "León" : "Velocirraptor";
    document.getElementById("estado-eleccion").textContent = `¡Has elegido al ${nombre}!`;
  });
});

document.addEventListener("pointermove", (event) => {
  document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
  document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
});