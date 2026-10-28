function attack(firstanimal, secondanimal) {

    // ESQUIVA
    let esquive = Math.random() * 100;

    if (esquive <= secondanimal.destreza) {

        secondanimal.destreza -= 5;

        secondanimal.destreza = Math.max(0, secondanimal.destreza);

            escribirTexto(secondanimal.name + " esquivó el ataque");

        return;
    }

    // DAÑO
    let danoFinal = firstanimal.daño - secondanimal.defensa;

    danoFinal = Math.max(1, danoFinal);

    // CRITICO
    let probabilidadCritico = Math.random() * 100;

    if (probabilidadCritico <= firstanimal.critico) {

        danoFinal *= 2;

        firstanimal.destreza -= 10;

        firstanimal.destreza = Math.max(0, firstanimal.destreza);

            escribirTexto(firstanimal.name + " ha dado un CRITICO");
    }

    // RESTAR VIDA
    secondanimal.vida -= danoFinal;

    secondanimal.vida = Math.max(0, secondanimal.vida);

        escribirTexto(
        firstanimal.name +
        " hizo " +
        danoFinal +
        " de daño a " +
        secondanimal.name
    );

        if (secondanimal.vida > 0) {
        escribirTexto(
        secondanimal.name +
        " ahora tiene " +
        secondanimal.vida +
        " de vida"
    );
}

    // CANSANCIO
    firstanimal.destreza -= 5;

    firstanimal.destreza = Math.max(0, firstanimal.destreza);

    // MUERTE
    if (secondanimal.vida <= 0) {

        escribirTexto(secondanimal.name + " ha muerto");
        escribirTexto(firstanimal.name + " es el ganador");
    }

     let maxDestreza1 = secondanimal.destreza;

    let maxDestreza2 = secondanimal.destreza;

    firstanimal.destreza = Math.max(0, firstanimal.destreza);

    secondanimal.destreza = Math.max(0, secondanimal.destreza);

    maxDestreza1 = Math.max(maxDestreza1, firstanimal.destreza);

    maxDestreza2 = Math.max(maxDestreza2, secondanimal.destreza);

     let maxVida1 = firstanimal.vida;

    let maxVida2 = secondanimal.vida;

     maxVida1 = Math.max(maxVida1, firstanimal.destreza);

    maxVida2 = Math.max(maxVida2, secondanimal.destreza);

    if (firstanimal.vida > 0 && secondanimal.vida > 0) {
    const recuperacionDestreza1 = setInterval(() => {
    firstanimal.destreza++;
    
    // Detener el intervalo a los 10 segundos
    if (firstanimal.destreza === maxDestreza1) {
        clearInterval(recuperacionDestreza1);
            escribirTexto(firstanimal.name + " ahora tiene su energia llena.");
    }
}, 10000); // 1000 milisegundos = 1 segundo
}

if (firstanimal.vida > 0 && secondanimal.vida > 0) {
const recuperacionDestreza2 = setInterval(() => {
    secondanimal.destreza++;
    
    // Detener el intervalo a los 10 segundos
    
    if (firstanimal.destreza === maxDestreza1) {
        clearInterval(recuperacionDestreza2);
            escribirTexto(secondanimal.name + " ahora tiene su energia llena.");
    }
    }, 10000); // 1000 milisegundos = 1 segundo
}
    //recuperacion de vida
    if (firstanimal.vida >= 0 && secondanimal.vida >= 0) {
    const recuperacionvida1 = setInterval(() => {
    firstanimal.vida++;
    
    // Detener el intervalo a los 10 segundos
    if (firstanimal.vida === maxVida1) {
        clearInterval(recuperacionvida1);
            escribirTexto(firstanimal.name + " ahora tiene su vida llena.");
    }
}, 15000); // 1000 milisegundos = 1 segundo

const recuperacionvida2 = setInterval(() => {
    secondanimal.vida++;
    
    // Detener el intervalo a los 10 segundos
    if (secondanimal.vida === maxVida2) {
        clearInterval(recuperacionvida2);
            escribirTexto(secondanimal.name + " ahora tiene su vida llena.");
    }
}, 15000); // 1000 milisegundos = 1 segundo

if (velocirraptor.vida > 0 && tiger.vida > 0) {
    if (secondanimal.destreza <= 0) {
            escribirTexto(secondanimal.name + " esta agotado");
    }
    else if (firstanimal.destreza <= 0) {
            escribirTexto(firstanimal.name + " esta agotado");
        }
    }
 }
}

// PELEA
async function iniciarPelea() {
    while (tiger.vida > 0 && velocirraptor.vida > 0) {
        attack(tiger, velocirraptor);

        if (velocirraptor.vida <= 0) break;

        await new Promise((resolve) => setTimeout(resolve, 50));
        attack(velocirraptor, tiger);

        if (tiger.vida <= 0) break;
        await new Promise((resolve) => setTimeout(resolve, 50));
    }
}