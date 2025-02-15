let preguntaIndex = 0;
let mensajeIndex = 0;
const preguntas = document.querySelectorAll(".pregunta");
const mensajes = document.querySelectorAll(".mensaje");

function iniciarHistoria() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
}

function mostrarPregunta(preguntaNumber) {
    document.getElementById(`pregunta${preguntaNumber}`).style.display = "none";
    if (preguntaNumber < 4) {
        document.getElementById(`pregunta${preguntaNumber + 1}`).style.display = "block";
    } else {
        document.getElementById("preguntas").style.display = "none";
        document.getElementById("contenido").style.display = "block";
        mostrarMensaje();
    }
}

function mostrarMensaje() {
    if (mensajeIndex < mensajes.length) {
        mensajes[mensajeIndex].style.display = "block";
        mensajeIndex++;
        setTimeout(() => {
            mensajes[mensajeIndex].style.display = "none";
            mensajeIndex++;
            mostrarMensaje();
        }, 7000);
    }
}

function mostrarSuperTexto() {
    const superTexto = document.createElement("div");
    superTexto.innerHTML = "<h1>FELICES 8 MESES AMOR DE MI VIDA</h1>";
    superTexto.style.fontSize = "50px";
    superTexto.style.fontFamily = "Arial, sans-serif";
    superTexto.style.fontWeight = "bold";
    superTexto.style.color = "#ff1493";
    superTexto.style.textAlign = "center";
    superTexto.style.position = "absolute";
    superTexto.style.top = "50%";
    superTexto.style.left = "50%";
    superTexto.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(superTexto);

    for (let i = 0; i < 10; i++) {
        crearCorazon();
    }

    for (let i = 0; i < 15; i++) {
        crearBurbuja();
    }

    for (let i = 0; i < 5; i++) {
        crearSerpentina();
    }

    setTimeout(() => {
        superTexto.style.opacity = "0";
        setTimeout(() => {
            superTexto.remove();
            mostrarUltimoTexto();
        }, 1000);
    }, 3000);
}

function mostrarMensaje() {
    if (mensajeIndex < mensajes.length) {
        mensajes[mensajeIndex].style.display = "block";
        mensajeIndex++;
        setTimeout(() => {
            mensajes[mensajeIndex - 1].style.display = "none"; // Ocultar el mensaje anterior
            if (mensajeIndex === mensajes.length) {
                // Cuando llegamos al último mensaje
                mostrarTextoFinal();
            } else {
                mostrarMensaje(); // Llamar recursivamente para el siguiente mensaje
            }
        }, 7000); // Mostrar una nueva foto cada 7 segundos
    }
}

function mostrarTextoFinal() {
    // Mostrar el mensaje "Por si no leíste bien"
    const mensajeFinal = document.createElement("div");
    mensajeFinal.innerHTML = "<h2>Por si no leíste bien</h2>";
    mensajeFinal.style.fontSize = "30px";
    mensajeFinal.style.fontFamily = "Arial, sans-serif";
    mensajeFinal.style.color = "#ff69b4";
    mensajeFinal.style.textAlign = "center";
    mensajeFinal.style.position = "absolute";
    mensajeFinal.style.top = "50%";
    mensajeFinal.style.left = "50%";
    mensajeFinal.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(mensajeFinal);

    setTimeout(() => {
        // Desaparecer el mensaje "Por si no leíste bien"
        mensajeFinal.style.opacity = "0";
        setTimeout(() => {
            mensajeFinal.remove(); // Eliminarlo de la página
            mostrarSuperTexto(); // Mostrar el siguiente texto grande
        }, 1000); // Esperar un segundo antes de desaparecer
    }, 3000); // Mostrarlo por 3 segundos
}

function mostrarSuperTexto() {
    // Mostrar el mensaje "FELICES 8 MESES AMOR DE MI VIDA"
    const superTexto = document.createElement("div");
    superTexto.innerHTML = "<h1>FELICES 8 MESES AMOR DE MI VIDA</h1>";
    superTexto.style.fontSize = "50px";
    superTexto.style.fontFamily = "Arial, sans-serif";
    superTexto.style.fontWeight = "bold";
    superTexto.style.color = "#ff1493";
    superTexto.style.textAlign = "center";
    superTexto.style.position = "absolute";
    superTexto.style.top = "50%";
    superTexto.style.left = "50%";
    superTexto.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(superTexto);

    setTimeout(() => {
        // Desaparecer el mensaje "FELICES 8 MESES AMOR DE MI VIDA"
        superTexto.style.opacity = "0";
        setTimeout(() => {
            superTexto.remove(); // Eliminarlo de la página
            mostrarUltimoTexto(); // Mostrar el mensaje final
        }, 1000); // Esperar un segundo antes de desaparecer
    }, 3000); // Mostrarlo por 3 segundos
}

function mostrarUltimoTexto() {
    // Mostrar el mensaje final "TE AMO DEMASIADO"
    const ultimoTexto = document.createElement("div");
    ultimoTexto.innerHTML = "<h2>TE AMO DEMASIADO</h2>";
    ultimoTexto.style.fontSize = "30px";
    ultimoTexto.style.fontFamily = "Arial, sans-serif";
    ultimoTexto.style.color = "#ff1493";
    ultimoTexto.style.textAlign = "center";
    ultimoTexto.style.position = "absolute";
    ultimoTexto.style.top = "50%";
    ultimoTexto.style.left = "50%";
    ultimoTexto.style.transform = "translate(-50%, -50%)";
    document.body.appendChild(ultimoTexto);

    setTimeout(() => {
        ultimoTexto.style.opacity = "0"; // Desaparecer el mensaje
        setTimeout(() => {
            ultimoTexto.remove(); // Eliminarlo de la página
        }, 1000); // Esperar un segundo antes de eliminar
    }, 3000); // Mostrarlo por 3 segundos
}