
/* ==========================================
   PREGUNTADOS CLIMATIZACIÓN AUTOMOTRIZ - CFP 401
   Lógica del juego
========================================== */

// BANCO DE PREGUNTAS
// Cada pregunta tiene una categoría, cuatro opciones
// y la posición de la respuesta correcta.

const bancoPreguntas = [
    {
        categoria: "Climatización",
        pregunta: "¿Cuál es la función principal del compresor?",
        opciones: [
            "Enfriar el habitáculo",
            "Comprimir y hacer circular el refrigerante",
            "Eliminar humedad",
            "Filtrar impurezas"
        ],
        correcta: 1
    },
    {
        categoria: "Climatización",
        pregunta: "¿Qué componente transforma el refrigerante de gas a líquido?",
        opciones: [
            "Evaporador",
            "Compresor",
            "Condensador",
            "Acumulador"
        ],
        correcta: 2
    },
    {
        categoria: "Climatización",
        pregunta: "¿Qué componente elimina la humedad del circuito?",
        opciones: [
            "Presostato",
            "Filtro deshidratante",
            "Evaporador",
            "Compresor"
        ],
        correcta: 1
    },
    {
        categoria: "Climatización",
        pregunta: "¿Cuál es el refrigerante utilizado en el sistema estudiado?",
        opciones: [
            "R22",
            "R410A",
            "R134a",
            "R32"
        ],
        correcta: 2
    },
    {
        categoria: "Climatización",
        pregunta: "¿Qué componente genera el frío?",
        opciones: [
            "Evaporador",
            "Condensador",
            "Filtro",
            "Presostato"
        ],
        correcta: 0
    },
    {
        categoria: "Climatización",
        pregunta: "¿Cuál es la función de la válvula de expansión?",
        opciones: [
            "Comprimir el refrigerante",
            "Reducir presión y regular caudal",
            "Eliminar humedad",
            "Filtrar aceite"
        ],
        correcta: 1
    },
    {
        categoria: "Climatización",
        pregunta: "¿Cada cuánto se recomienda cambiar el filtro deshidratante?",
        opciones: [
            "Cada 10 años",
            "Cada 5 años",
            "Solo cuando falla",
            "Cada 2 años o al abrir el circuito"
        ],
        correcta: 3
    },
    {
        categoria: "Diagnóstico",
        pregunta: "¿Qué indica un subenfriamiento menor a 2°C?",
        opciones: [
            "Falta de refrigerante",
            "Exceso de aceite",
            "Compresor nuevo",
            "Condensador limpio"
        ],
        correcta: 0
    },
    {
        categoria: "Diagnóstico",
        pregunta: "¿Cuál es el valor ideal de subenfriamiento (SE)?",
        opciones: [
            "0°C",
            "5°C",
            "15°C",
            "20°C"
        ],
        correcta: 1
    },
    {
        categoria: "Diagnóstico",
        pregunta: "¿Qué indica un recalentamiento mayor a 10°C?",
        opciones: [
            "Exceso de refrigerante",
            "Falta de refrigerante",
            "Filtro nuevo",
            "Ventilador encendido"
        ],
        correcta: 1
    },
    {
        categoria: "Diagnóstico",
        pregunta: "¿Cuál es el valor ideal de recalentamiento (RC)?",
        opciones: [
            "5°C",
            "15°C",
            "20°C",
            "0°C"
        ],
        correcta: 0
    },
    {
        categoria: "Averías",
        pregunta: "¿Cuál es el principal enemigo del sistema de climatización?",
        opciones: [
            "Polvo",
            "Aceite",
            "Humedad",
            "Electricidad"
        ],
        correcta: 2
    },
    {
        categoria: "Averías",
        pregunta: "¿Qué puede provocar la humedad dentro del circuito?",
        opciones: [
            "Corrosión y formación de ácidos",
            "Mayor refrigeración",
            "Menor consumo",
            "Más potencia"
        ],
        correcta: 0
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué componente evita que llegue refrigerante líquido al compresor?",
        opciones: [
            "Condensador",
            "Acumulador",
            "Evaporador",
            "Presostato"
        ],
        correcta: 1
    },
    {
        categoria: "Sensores",
        pregunta: "¿Qué sensor evita la formación de hielo en el evaporador?",
        opciones: [
            "Sensor solar",
            "Presostato",
            "Sonda del evaporador",
            "Sensor exterior"
        ],
        correcta: 2
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Cuál es el método más utilizado para detectar fugas?",
        opciones: [
            "Golpear tuberías",
            "Escuchar ruido",
            "Trazador fluorescente y lámpara UV",
            "Medir batería"
        ],
        correcta: 2
    },
    {
        categoria: "Seguridad",
        pregunta: "¿Qué componente protege al sistema contra presiones anormales?",
        opciones: [
            "Evaporador",
            "Filtro habitáculo",
            "Compresor",
            "Presostato"
        ],
        correcta: 3
    },
    {
        categoria: "Lubricación",
        pregunta: "¿Qué aceite se utiliza con refrigerante R134a?",
        opciones: [
            "Mineral",
            "PAG",
            "15W40",
            "ATF"
        ],
        correcta: 1
    },
    {
        categoria: "Circuito",
        pregunta: "¿Cuál es el orden correcto del circuito?",
        opciones: [
            "Compresor → Condensador → Filtro → Válvula → Evaporador",
            "Evaporador → Compresor → Condensador → Válvula",
            "Condensador → Evaporador → Compresor",
            "Válvula → Evaporador → Compresor"
        ],
        correcta: 0
    },
    {
        categoria: "Diagnóstico",
        pregunta: "Antes de recargar refrigerante es importante comprobar:",
        opciones: [
            "Nivel de combustible",
            "Estado de la batería",
            "SE y RC",
            "Presión de neumáticos"
        ],
        correcta: 2
    },
    // ---- PREGUNTAS NUEVAS ----
    {
        categoria: "Mantenimiento",
        pregunta: "¿Qué se utiliza para probar si hay pérdidas en un circuito?",
        opciones: [
            "Oxígeno",
            "Agua",
            "Nitrógeno",
            "Aire del taller"
        ],
        correcta: 2
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Cuál es la presión máxima de nitrógeno que se debe aplicar en la prueba de pérdidas?",
        opciones: [
            "100 psi",
            "250 psi",
            "500 psi",
            "1000 psi"
        ],
        correcta: 1
    },
    {
        categoria: "Mantenimiento",
        pregunta: "Con los manómetros conectados marcando 0 psi, ¿cuál es el primer paso a seguir?",
        opciones: [
            "Cargar refrigerante directamente",
            "Presurizar con nitrógeno",
            "Hacer vacío",
            "Cambiar el compresor"
        ],
        correcta: 1
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Cuál es el orden correcto de los pasos luego de conectar los manómetros?",
        opciones: [
            "Carga → vacío → nitrógeno → verificar pérdidas",
            "Vacío → carga → nitrógeno → verificar pérdidas",
            "Presurizar con nitrógeno → verificar pérdidas → vacío → carga",
            "Verificar pérdidas → carga → nitrógeno → vacío"
        ],
        correcta: 2
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Cómo se llama la prueba que consiste en presurizar el sistema con nitrógeno y comprobar que mantenga la presión?",
        opciones: [
            "Prueba de pérdida estática",
            "Prueba de vacío dinámico",
            "Prueba de carga",
            "Prueba de arranque"
        ],
        correcta: 0
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Dónde se puede consultar cuántos gramos de refrigerante lleva el sistema?",
        opciones: [
            "En el aceite del compresor",
            "En la etiqueta del compresor",
            "En el filtro del habitáculo",
            "En la batería"
        ],
        correcta: 1
    },
    {
        categoria: "Mantenimiento",
        pregunta: "¿Qué instrumento se usa para controlar la cantidad de refrigerante que se carga?",
        opciones: [
            "Balanza",
            "Termómetro ambiente",
            "Multímetro",
            "Calibre"
        ],
        correcta: 0
    },
    {
        categoria: "Lubricación",
        pregunta: "El aceite que se utiliza con el refrigerante R134a es de tipo:",
        opciones: [
            "Mineral",
            "Sintético",
            "Vegetal",
            "Aceite de motor"
        ],
        correcta: 1
    },
    {
        categoria: "Diagnóstico",
        pregunta: "Con el sistema cargado y el auto parado, ¿cómo deben estar las presiones de alta y baja?",
        opciones: [
            "La alta mucho mayor que la baja",
            "La baja mucho mayor que la alta",
            "Iguales (equilibradas)",
            "Las dos en 0 psi"
        ],
        correcta: 2
    },
    {
        categoria: "Circuito",
        pregunta: "En los esquemas del circuito, ¿qué indica el color azul?",
        opciones: [
            "Lado de baja presión (frío)",
            "Lado de alta presión (caliente)",
            "Zona sin refrigerante",
            "Circuito eléctrico"
        ],
        correcta: 0
    },
    {
        categoria: "Circuito",
        pregunta: "En los esquemas del circuito, ¿qué indica el color rojo?",
        opciones: [
            "Baja presión y frío",
            "Alta presión y calor",
            "Presencia de humedad",
            "Entrada de aire"
        ],
        correcta: 1
    },
    {
        categoria: "Circuito",
        pregunta: "¿Hacia dónde va el refrigerante caliente que sale del compresor?",
        opciones: [
            "Al evaporador",
            "Al condensador",
            "A la válvula de expansión",
            "Al habitáculo"
        ],
        correcta: 1
    },
    {
        categoria: "Circuito",
        pregunta: "¿Qué ocurre con el refrigerante después de pasar por el evaporador?",
        opciones: [
            "Vuelve al compresor en estado gaseoso y se repite el ciclo",
            "Se descarta al exterior",
            "Pasa al filtro del habitáculo",
            "Se almacena en el tanque de combustible"
        ],
        correcta: 0
    },
    {
        categoria: "Circuito",
        pregunta: "La línea de succión del sistema es la de:",
        opciones: [
            "Alta presión",
            "Baja presión",
            "Presión nula",
            "Solo líquido"
        ],
        correcta: 1
    },
    {
        categoria: "Circuito",
        pregunta: "La línea de descarga (alta presión) es la que va:",
        opciones: [
            "Del evaporador al compresor",
            "Del tanque al compresor",
            "Del compresor al condensador",
            "Del habitáculo al evaporador"
        ],
        correcta: 2
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué función cumple el compresor en el aire acondicionado?",
        opciones: [
            "Enfriar el aire del habitáculo",
            "Eliminar la humedad",
            "Comprimir el refrigerante",
            "Filtrar el aire"
        ],
        correcta: 2
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué función cumple el condensador?",
        opciones: [
            "Comprimir el gas",
            "Disipar el calor y pasar el refrigerante de gas a líquido",
            "Generar el frío en el habitáculo",
            "Medir la presión"
        ],
        correcta: 1
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué función cumple la válvula de expansión o tubo calibrado?",
        opciones: [
            "Comprime el gas",
            "Elimina la humedad",
            "Reduce la presión del líquido para que pase a gas en el evaporador",
            "Protege contra altas presiones"
        ],
        correcta: 2
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué función cumple el evaporador?",
        opciones: [
            "Disipa el calor al exterior",
            "Comprime el refrigerante",
            "Absorbe el calor del habitáculo al evaporarse el refrigerante",
            "Almacena el aceite"
        ],
        correcta: 2
    },
    {
        categoria: "Componentes",
        pregunta: "¿Qué función cumple el presostato?",
        opciones: [
            "Habilita o corta el funcionamiento del compresor según la presión",
            "Genera el frío",
            "Filtra impurezas",
            "Comprime el refrigerante"
        ],
        correcta: 0
    }
];

// ELEMENTOS HTML
const presentacion = document.getElementById("presentacion");
const zonaJuego = document.getElementById("zonaJuego");
const resultadoFinal = document.getElementById("resultadoFinal");

const campoNombre = document.getElementById("nombreJugador");
const btnComenzar = document.getElementById("btnComenzar");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReiniciar = document.getElementById("btnReiniciar");

const elementoPregunta = document.getElementById("pregunta");
const elementoOpciones = document.getElementById("opciones");
const elementoCategoria = document.getElementById("categoriaActual");
const elementoMensaje = document.getElementById("mensaje");

const elementoPuntaje = document.getElementById("puntaje");
const elementoContador = document.getElementById("contador");
const elementoCorrectas = document.getElementById("correctas");
const elementoProgreso = document.getElementById("progreso");
const elementoProgresoTexto = document.getElementById("progresoTexto");

// VARIABLES DEL JUEGO
const TOTAL_PREGUNTAS = 20;
const PUNTOS_POR_RESPUESTA = 100;

let preguntasPartida = [];
let indicePregunta = 0;
let puntaje = 0;
let cantidadCorrectas = 0;
let nombreJugador = "Invitado";
let respondida = false;

// MEZCLAR LAS PREGUNTAS ALEATORIAMENTE
function mezclarPreguntas(lista) {
    const copia = [...lista];

    // Algoritmo Fisher-Yates para mezclar el orden
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

// MEZCLAR LAS OPCIONES DE UNA PREGUNTA
// (así la respuesta correcta no cae siempre en la misma letra)
function mezclarOpciones(pregunta) {
    const textoCorrecto = pregunta.opciones[pregunta.correcta];
    const opciones = mezclarPreguntas(pregunta.opciones);

    return {
        categoria: pregunta.categoria,
        pregunta: pregunta.pregunta,
        opciones: opciones,
        correcta: opciones.indexOf(textoCorrecto)
    };
}

// COMENZAR UNA PARTIDA NUEVA
function comenzarJuego() {
    nombreJugador = campoNombre.value.trim() || "Invitado";

    // Seleccionamos 20 preguntas para esta partida
    // y mezclamos también el orden de las opciones de cada una
    preguntasPartida = mezclarPreguntas(bancoPreguntas)
        .slice(0, TOTAL_PREGUNTAS)
        .map(mezclarOpciones);

    indicePregunta = 0;
    puntaje = 0;
    cantidadCorrectas = 0;
    respondida = false;

    // Ocultamos la presentación y los resultados anteriores
    presentacion.classList.add("oculto");
    resultadoFinal.classList.add("oculto");

    // Mostramos el área de juego
    zonaJuego.classList.remove("oculto");

    actualizarEstadisticas();
    mostrarPregunta();
}

// MOSTRAR LA PREGUNTA ACTUAL
function mostrarPregunta() {
    respondida = false;

    const actual = preguntasPartida[indicePregunta];

    elementoPregunta.textContent = actual.pregunta;
    elementoCategoria.textContent = "📚 " + actual.categoria;

    elementoContador.textContent =
        `${indicePregunta + 1} / ${TOTAL_PREGUNTAS}`;

    elementoProgresoTexto.textContent =
        `Pregunta ${indicePregunta + 1} de ${TOTAL_PREGUNTAS}`;

    elementoProgreso.style.width =
        `${((indicePregunta + 1) / TOTAL_PREGUNTAS) * 100}%`;

    elementoMensaje.textContent = "";
    btnSiguiente.classList.add("oculto");

    // Limpiamos las opciones de la pregunta anterior
    elementoOpciones.replaceChildren();

    const letras = ["A", "B", "C", "D"];

    // Creamos un botón por cada respuesta
    actual.opciones.forEach(function (opcion, indice) {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";

        const letra = document.createElement("span");
        letra.className = "letra-opcion";
        letra.textContent = letras[indice];

        const texto = document.createElement("span");
        texto.textContent = opcion;

        boton.append(letra, texto);

        // Al hacer clic, comprobamos la respuesta elegida
        boton.addEventListener("click", function () {
            comprobarRespuesta(indice, boton);
        });

        elementoOpciones.appendChild(boton);
    });
}

// COMPROBAR SI LA RESPUESTA ES CORRECTA
function comprobarRespuesta(indiceElegido, botonElegido) {
    // Evitamos responder varias veces la misma pregunta
    if (respondida) return;

    respondida = true;

    const actual = preguntasPartida[indicePregunta];
    const botones = elementoOpciones.querySelectorAll(".opcion");

    // Desactivamos todas las respuestas
    botones.forEach(function (boton) {
        boton.disabled = true;
    });

    // Marcamos la respuesta correcta en verde
    botones[actual.correcta].classList.add("correcta");

    if (indiceElegido === actual.correcta) {
        cantidadCorrectas++;
        puntaje += PUNTOS_POR_RESPUESTA;

        elementoMensaje.textContent =
            "🎉 ¡Respuesta correcta! Sumaste 100 puntos.";

        elementoMensaje.style.color = "#047857";
    } else {
        botonElegido.classList.add("incorrecta");

        elementoMensaje.textContent =
            "❌ ¡No es correcto! La respuesta correcta era: " +
            actual.opciones[actual.correcta] + ".";

        elementoMensaje.style.color = "#b91c1c";
    }

    actualizarEstadisticas();

    // Cambiamos el texto del botón en la última pregunta
    if (indicePregunta === TOTAL_PREGUNTAS - 1) {
        btnSiguiente.textContent = "Ver resultado final 🏆";
    } else {
        btnSiguiente.textContent = "Siguiente pregunta →";
    }

    btnSiguiente.classList.remove("oculto");
}

// ACTUALIZAR EL PUNTAJE Y LAS ESTADÍSTICAS
function actualizarEstadisticas() {
    elementoPuntaje.textContent = puntaje;
    elementoCorrectas.textContent = cantidadCorrectas;
}

// PASAR A LA SIGUIENTE PREGUNTA
function siguientePregunta() {
    if (!respondida) return;

    indicePregunta++;

    if (indicePregunta < TOTAL_PREGUNTAS) {
        mostrarPregunta();
    } else {
        finalizarJuego();
    }
}

// MOSTRAR LOS RESULTADOS FINALES
function finalizarJuego() {
    zonaJuego.classList.add("oculto");
    resultadoFinal.classList.remove("oculto");

    document.getElementById("saludoFinal").textContent =
        `¡Muy bien, ${nombreJugador}! Gracias por participar.`;

    document.getElementById("puntajeFinal").textContent = puntaje;

    // Calcular nota sobre 10
    const nota = ((cantidadCorrectas / TOTAL_PREGUNTAS) * 10).toFixed(1);

    document.getElementById("resumenFinal").textContent =
        `Respondiste correctamente ${cantidadCorrectas} de ` +
        `${TOTAL_PREGUNTAS} preguntas. Nota final: ${nota}/10`;

    // Mensajes según el resultado
    let mensajeFinal;

    if (cantidadCorrectas >= 18) {
        mensajeFinal = "🏆 ¡Excelente! Dominás muy bien la climatización automotriz.";
    } else if (cantidadCorrectas >= 15) {
        mensajeFinal = "🌟 ¡Muy bien! Tenés un gran nivel de conocimientos.";
    } else if (cantidadCorrectas >= 10) {
        mensajeFinal = "👏 Buen trabajo. Seguís avanzando correctamente.";
    } else {
        mensajeFinal = "📚 Necesitás repasar algunos temas antes del examen.";
    }

    document.getElementById("mensajeFinal").textContent = mensajeFinal;

    // Volvemos al comienzo de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// VOLVER A JUGAR
function reiniciarJuego() {
    resultadoFinal.classList.add("oculto");
    zonaJuego.classList.add("oculto");
    presentacion.classList.remove("oculto");

    campoNombre.value = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    campoNombre.focus();
}

// CONECTAR LOS BOTONES CON SUS FUNCIONES
btnComenzar.addEventListener("click", comenzarJuego);
btnSiguiente.addEventListener("click", siguientePregunta);
btnReiniciar.addEventListener("click", reiniciarJuego);

// Permitir comenzar con la tecla Enter en el campo del nombre
campoNombre.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        comenzarJuego();
    }
});