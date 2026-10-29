const escenarios = [
    {
        id: "desierto",
        nombre: "Desierto",
        descripcion: "Dunas bajo el sol.",
        capas: ["sol", "nube", "montana", "duna-lejana", "duna", "suelo"],
    },
    {
        id: "selva",
        nombre: "Selva",
        descripcion: "Vegetación tropical.",
        capas: ["sol", "nube", "arbol-izquierdo", "arbol-derecho", "arbol-central", "suelo"],
    },
    {
        id: "bosque",
        nombre: "Bosque",
        descripcion: "Árboles al fondo.",
        capas: ["sol", "nube", "arbol-central", "arbol-izquierdo", "arbol-derecho", "suelo"],
    },
    {
        id: "noche",
        nombre: "Noche",
        descripcion: "Luna, estrellas y montañas.",
        capas: ["luna", "estrella", "estrella", "estrella", "montana", "arbol-izquierdo", "suelo"],
    },
];

const pantallaDia = document.getElementById("dia");
const pantallaNoche = document.getElementById("noche");

function crearCapa(nombre) {
    const capa = document.createElement("span");
    capa.className = `escenario-capa escenario-capa--${nombre}`;
    return capa;
}

function crearOpcionEscenario(escenario, seleccionado) {
    const boton = document.createElement("button");
    boton.className = "escenario-opcion";
    boton.type = "button";
    boton.setAttribute("aria-pressed", String(seleccionado));
    boton.dataset.escenario = escenario.id;

    const arte = document.createElement("span");
    arte.className = `escenario-arte escenario-arte--${escenario.id}`;
    arte.setAttribute("aria-hidden", "true");

    escenario.capas.forEach((capa) => arte.appendChild(crearCapa(capa)));

    const nombre = document.createElement("span");
    nombre.className = "escenario-opcion__nombre";
    nombre.textContent = escenario.nombre;

    const descripcion = document.createElement("span");
    descripcion.className = "escenario-opcion__descripcion";
    descripcion.textContent = escenario.descripcion;

    boton.append(arte, nombre, descripcion);
    return boton;
}

function mostrarSelectorEscenarios(contenedor) {
    const titulo = document.createElement("h2");
    titulo.className = "selector-escenarios__titulo";
    titulo.id = "selector-escenarios-titulo";
    titulo.textContent = "Elige un escenario";

    const opciones = document.createElement("div");
    opciones.className = "selector-escenarios__opciones";
    opciones.setAttribute("role", "group");
    opciones.setAttribute("aria-labelledby", titulo.id);

    const estado = document.createElement("p");
    estado.className = "selector-escenarios__estado";
    estado.setAttribute("aria-live", "polite");

    escenarios.forEach((escenario, indice) => {
        const boton = crearOpcionEscenario(escenario, indice === 0);

        boton.addEventListener("click", () => {
            opciones.querySelectorAll(".escenario-opcion").forEach((opcion) => {
                opcion.setAttribute("aria-pressed", String(opcion === boton));
            });

            estado.textContent = `Escenario seleccionado: ${escenario.nombre}`;
            contenedor.dataset.escenarioSeleccionado = escenario.id;
        });

        opciones.appendChild(boton);
    });

    estado.textContent = `Escenario seleccionado: ${escenarios[0].nombre}`;
    contenedor.dataset.escenarioSeleccionado = escenarios[0].id;
    contenedor.append(titulo, opciones, estado);
}

function selector(escenarioElegido) {
    [pantallaDia, pantallaNoche].forEach((pantalla) => {
        if (pantalla) {
            pantalla.style.display = "none";
        }
    });

    if (escenarioElegido) {
        escenarioElegido.style.display = "grid";
    }
}

const selectorPrincipal = document.getElementById("selector-escenarios");

if (selectorPrincipal) {
    mostrarSelectorEscenarios(selectorPrincipal);
}
