// 1. Banco de preguntas con opciones equilibradas en longitud para evitar respuestas obvias
const preguntas = [
    {
        categoria: 'Identidad',
        pregunta: 'Un amigo te dice: "Toda la vida los hombres se han vestido de una forma y las mujeres de otra, así que cambiar eso ahora es una tontería y está mal". ¿Cuál es el error en su lógica?',
        opciones: [
            'Ninguno, si algo se ha hecho siempre así, significa que es la única forma correcta.',
            'Asumir que las costumbres antiguas son perfectas y jamás deberían ser modificadas.',
            'Pensar que vestirse de forma diferente es ilegal en la mayoría de los países.',
            'Creer que la ropa actual es de menor calidad y precio que la de antes.'
        ],
        correcta: 'Asumir que las costumbres antiguas son perfectas y jamás deberían ser modificadas.'
    },
    {
        categoria: 'Salud mental',
        pregunta: 'Ves un video que dice: "Desde que la gente usa TikTok hay más casos de ansiedad, por lo tanto, TikTok te quema la cabeza y causa trastornos". ¿Por qué este argumento falla?',
        opciones: [
            'Refleja fielmente que las redes sociales son la única causa de problemas mental.',
            'Porque asume que si dos cosas pasan a la vez, una es la causa directa de la otra.',
            'Porque la ansiedad es algo exagerado por los jóvenes para figurar en redes.',
            'Porque en Instagram hay un porcentaje de ansiedad mucho mayor según los datos.'
        ],
        correcta: 'Porque asume que si dos cosas pasan a la vez, una es la causa directa de la otra.'
    },
    {
        categoria: 'Medio ambiente',
        pregunta: 'En un debate dicen: "O dejamos que las empresas trabajen libres para tener dinero o cuidamos los bosques, no se pueden hacer las dos cosas". ¿Qué trampa hay aquí?',
        opciones: [
            'Te obligan a elegir entre dos extremos exagerados, ignorando las opciones intermedias.',
            'Cuidar los bosques es inútil porque la tecnología los va a reemplazar muy pronto.',
            'Las empresas siempre tienen la razón absoluta porque son las que generan empleo.',
            'El dinero y la naturaleza nunca se han llevado bien a lo largo de la historia.'
        ],
        correcta: 'Te obligan a elegir entre dos extremos exagerados, ignorando las opciones intermedias.'
    },
    {
        categoria: 'Violencia',
        pregunta: 'Si alguien dice: "Ese chico reaccionó de forma violentamente porque vive en un barrio peligroso, todos los que viven ahí son iguales de agresivos". ¿Cuál es el fallo?',
        opciones: [
            'Que en los barrios catalogados como peligrosos la gente vive mucho más feliz.',
            'Juzgar las acciones de una persona entera usando prejuicios sobre su lugar de origen.',
            'La violencia real ocurre solamente dentro de los colegios particulares pagados.',
            'Debió mencionar que la agresividad es causada directamente por los videojuegos.'
        ],
        correcta: 'Juzgar las acciones de una persona entera usando prejuicios sobre su lugar de origen.'
    },
    {
        categoria: 'Desarrollo sexual',
        pregunta: 'Alguien afirma: "Si empezamos a hablar de educación sexual en los colegios, los jóvenes se van a volver locos y la sociedad se va a ir a la ruina total". ¿Qué tipo de trampa argumentativa es?',
        opciones: [
            'Inventar un futuro terrible y exagerado sin pruebas para causar miedo.',
            'Una predicción científica muy acertada sobre la conducta de los jóvenes.',
            'Un consejo sumamente útil para evitar que los estudiantes cometan errores.',
            'La ley de causa y efecto aplicada de forma matemática a las relaciones.'
        ],
        correcta: 'Inventar un futuro terrible y exagerado sin pruebas para causar miedo.'
    },
    {
        categoria: 'Guerras',
        pregunta: 'Un canal de noticias llama a los soldados de un bando "luchadores por la libertad" y otro canal los llama "terroristas peligrosos". ¿Qué nos enseña esto sobre la información?',
        opciones: [
            'Que uno de los dos canales maneja datos del futuro y el otro no.',
            'Elegir las palabras a propósito para manipular lo que sentimos del tema.',
            'Las noticias siempre dicen la verdad según el color del logo que tengan.',
            'La guerra es una ficción inventada por las pantallas para ganar rating.'
        ],
        correcta: 'Elegir las palabras a propósito para manipular lo que sentimos del tema.'
    },
    {
        categoria: 'Tecnología',
        pregunta: 'Mucha gente le cree todo lo que dice ChatGPT porque piensan que las Inteligencias Artificiales son perfectas y no tienen opiniones humanas. ¿Cuál es el peligro de esto?',
        opciones: [
            'Que el sistema se va a enojar contigo si cuestionas sus respuestas.',
            'Olvidar que las IA imitan textos humanos y pueden repetir sus sesgos.',
            'Ninguno, las máquinas son perfectas gracias al uso de matemáticas puras.',
            'Que la aplicación te cobrará una multa si detecta dudas en tus consultas.'
        ],
        correcta: 'Olvidar que las IA imitan textos humanos y pueden repetir sus sesgos.'
    },
    {
        categoria: 'Finanzas',
        pregunta: 'Un influencer sube un video diciendo: "Yo invertí 10 lucas en esta aplicación y me gané un millón en tres días, háganlo todos porque es 100% seguro". ¿Qué deberías pensar críticamente?',
        opciones: [
            'Si él pudo lograrlo, yo también seré millonario mañana sin trabajar.',
            'Te muestra su golpe de suerte y oculta a los miles que perdieron todo.',
            'Los influencers tienen prohibido por ley mentir en sus redes sociales.',
            'Diez lucas es una cantidad muy baja como para preocuparse si se pierde.'
        ],
        correcta: 'Te muestra su golpe de suerte y oculta a los miles que perdieron todo.'
    },
    {
        categoria: 'Moda',
        pregunta: 'Ves que una zapatilla horrenda se vuelve viral y todo el mundo en redes dice que es "aesthetic". Al final te dan ganas de comprarla solo para no quedar fuera. ¿Qué influyó en tu decisión?',
        opciones: [
            'Un estudio profundo sobre los materiales, la comodidad y su costura.',
            'La presión social de hacer algo solo porque ves al resto haciéndolo.',
            'Que tus pies necesitaban ese modelo exacto por temas de salud médica.',
            'La zapatilla contenía publicidad subliminal que te convenció al instante.'
        ],
        correcta: 'La presión social de hacer algo solo porque ves al resto haciéndolo.'
    },
    {
        categoria: 'Aceptación',
        pregunta: 'Subes una foto a redes y tiene poquísimos likes. Al tiro piensas: "Qué vergüenza, esto demuestra que le caigo mal a todo el mundo y nadie me quiere". ¿Por qué este pensamiento está mal?',
        opciones: [
            'Refleja fielmente que las redes sociales son la única causa de problemas mental.',
            'Exagerar y sacar una conclusión terrible sin tener evidencias reales.',
            'Debiste borrar la publicación rápido y usar un filtro mucho más llamativo.',
            'Tener pocos likes es una métrica científica de tu nivel de popularidad.'
        ],
        correcta: 'Exagerar y sacar una conclusión terrible sin tener evidencias reales.'
    },
    {
        categoria: 'Ver el mundo',
        pregunta: 'Cuando discutes con alguien y piensas: "Yo soy el único que ve las cosas de forma lógica y real, y los que no están de acuerdo conmigo están locos o tontos". ¿Qué trampa te estás poniendo?',
        opciones: [
            'Creer que tu mirada es la única objetiva, olvidando tus propios sesgos.',
            'Ninguna, pensar así demuestra una gran autoestima y mucha inteligencia.',
            'Que necesitas buscar un nuevo grupo de amigos que piensen igual que tú.',
            'Eres el personaje principal del mundo y los demás son solo actores de relleno.'
        ],
        correcta: 'Creer que tu mirada es la única objetiva, olvidando tus propios sesgos.'
    },
    {
        categoria: 'Universidad',
        pregunta: 'Estás pensando qué estudiar al salir de 4to medio y un familiar te dice: "No estudies esa carrera, porque el primo de un amigo se tituló de eso y ahora está sin trabajo". ¿Por qué no deberías guiarte solo por eso?',
        opciones: [
            'Porque los familiares de los amigos siempre inventan cosas falsas.',
            'Es un solo caso aislado; lo correcto es buscar las estadísticas oficiales.',
            'De aquí a que te titules esa opción profesional ya dejará de existir.',
            'Es mejor estudiar lo que sea que deje más dinero el primer año de egreso.'
        ],
        correcta: 'Es un solo caso aislado; lo correcto es buscar las estadísticas oficiales.'
    }
];

// Paleta cromática de alta definición
const coloresSectores = [
    '#E74C3C', '#E67E22', '#F1C40F', '#2ECC71', '#1ABC9C', '#3498DB',
    '#9B59B6', '#34495E', '#D35400', '#27AE60', '#2980B9', '#8E44AD'
];

// Inicialización de selectores del DOM
const canvas = document.getElementById('ruletaCanvas');
const ctx = canvas.getContext('2d');
const btnGirar = document.getElementById('btnGirar');
const marcadorPuntaje = document.getElementById('marcadorPuntaje');
const contenedorPregunta = document.getElementById('contenedorPregunta');
const categoriaPregunta = document.getElementById('categoriaPregunta');
const textoPregunta = document.getElementById('textoPregunta');
const listaOpciones = document.getElementById('listaOpciones');
const feedbackResultado = document.getElementById('feedbackResultado');
const flecha = document.getElementById('flecha');

const anuncioTema = document.getElementById('anuncioTema');
const anuncioCaja = document.getElementById('anuncioCaja');
const anuncioTexto = document.getElementById('anuncioTexto');

let puntaje = 0;
let anguloActual = 0;
let girando = false;
let ultimoSectorIndex = -1;

// Renderizar la ruleta con los nombres visualmente desfasados un puesto a la izquierda (antihorario)
function dibujarRuleta() {
    const cantidadSectores = preguntas.length;
    const arco = (2 * Math.PI) / cantidadSectores;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    preguntas.forEach((preg, i) => {
        // Los sectores físicos se quedan fijos en su posición matemática para el cálculo correcto
        const anguloSector = anguloActual + i * arco;
        
        ctx.fillStyle = coloresSectores[i % coloresSectores.length];
        ctx.beginPath();
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 142, anguloSector, anguloSector + arco);
        ctx.lineTo(150, 150);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.stroke();

        // AJUSTE DE UBICACIÓN: Se desplaza el título impreso un puesto a la izquierda (i + 1)
        const siguienteIndice = (i + 1) % cantidadSectores;
        const categoriaRotada = preguntas[siguienteIndice].categoria;

        ctx.save();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 10px sans-serif';
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.translate(150, 150);
        ctx.rotate(anguloSector + arco / 2);
        ctx.textAlign = 'right';
        ctx.fillText(categoriaRotada, 132, 4);
        ctx.restore();
    });

    // Centro decorativo de la ruleta
    ctx.beginPath();
    ctx.arc(150, 150, 22, 0, 2 * Math.PI);
    ctx.fillStyle = '#1e293b';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#38bdf8';
    ctx.stroke();
}

// Ejecución física del giro y lectura calibrada para el eje de las 3 en punto (derecha)
function girarRuleta() {
    if (girando) return;

    girando = true;
    btnGirar.disabled = true;
    btnGirar.innerText = '⚙️ Analizando...';
    
    contenedorPregunta.classList.add('hidden');
    feedbackResultado.classList.add('hidden');

    let duracionTotal = 4000; 
    let tiempoInicio = null;
    
    const girosCompletos = (Math.floor(Math.random() * 4) + 5) * (2 * Math.PI); 
    const anguloDestino = anguloActual + girosCompletos + (Math.random() * (2 * Math.PI));
    const anguloInicialBase = anguloActual;

    function actualizarGiro(timestamp) {
        if (!tiempoInicio) tiempoInicio = timestamp;
        let tiempoTranscurrido = timestamp - tiempoInicio;
        
        let t = Math.min(tiempoTranscurrido / duracionTotal, 1);
        let progresoFisico = 1 - Math.pow(1 - t, 3); // Desaceleración suave (Ease-Out Cúbico)
        
        anguloActual = anguloInicialBase + (anguloDestino - anguloInicialBase) * progresoFisico;
        dibujarRuleta();

        // CÁLCULO DE INTERSECCIÓN CON LA AGUJA DEL CENTRO-DERECHA (0 RADIANES)
        const cantidadSectores = preguntas.length;
        const arco = (2 * Math.PI) / cantidadSectores;
        
        let anguloNormalizado = anguloActual % (2 * Math.PI);
        if (anguloNormalizado < 0) anguloNormalizado += 2 * Math.PI;
        
        let sectorActualIndex = (cantidadSectores - Math.floor(anguloNormalizado / arco)) % cantidadSectores;
        
        // Simulación física de rebote en la aguja lateral derecha
        if (sectorActualIndex !== ultimoSectorIndex) {
            ultimoSectorIndex = sectorActualIndex;
            if (flecha) {
                flecha.style.transform = 'scaleX(1.4) translateX(-4px)';
                setTimeout(() => { flecha.style.transform = 'scaleX(1) translateX(0)'; }, 50);
            }
        }

        if (t < 1) {
            requestAnimationFrame(actualizarGiro);
        } else {
            girando = false;
            btnGirar.disabled = false;
            btnGirar.innerText = '🎰 Girar Ruleta';

            let preguntaSeleccionada = preguntas[sectorActualIndex];
            lanzarAnuncioImpactante(preguntaSeleccionada);
        }
    }
    requestAnimationFrame(actualizarGiro);
}

// Despliega el pop-up animado con tipografía gigante y brillos degradados
function lanzarAnuncioImpactante(preg) {
    anuncioTexto.innerText = preg.categoria;
    
    const coloresTexto = ['from-amber-400 to-orange-500', 'from-teal-400 to-cyan-500', 'from-purple-400 to-pink-500', 'from-emerald-400 to-green-500'];
    const combinacionAleatoria = coloresTexto[Math.floor(Math.random() * coloresTexto.length)];
    anuncioTexto.className = `text-5xl md:text-7xl font-black mt-4 bg-gradient-to-r ${combinacionAleatoria} bg-clip-text text-transparent drop-shadow-xl tracking-wide uppercase`;

    anuncioTema.classList.remove('hidden');
    
    setTimeout(() => {
        anuncioCaja.classList.remove('scale-50', 'opacity-0');
        anuncioCaja.classList.add('scale-100', 'opacity-100');
    }, 50);

    setTimeout(() => {
        anuncioCaja.classList.remove('scale-100', 'opacity-100');
        anuncioCaja.classList.add('scale-110', 'opacity-0');
        
        setTimeout(() => {
            anuncioTema.classList.add('hidden');
            anuncioCaja.classList.remove('scale-110');
            anuncioCaja.classList.add('scale-50');
            
            mostrarPregunta(preg);
        }, 400);
    }, 1800);
}

// Mezclador aleatorio Fisher-Yates para barajar las alternativas
function mezclarOpciones(array) {
    let copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

// Imprimir la pregunta elegida en el contenedor de abajo
function mostrarPregunta(preg) {
    categoriaPregunta.innerText = `Tema: ${preg.categoria}`;
    textoPregunta.innerText = preg.pregunta;
    listaOpciones.innerHTML = ''; 

    const opcionesMezcladas = mezclarOpciones(preg.opciones);

    opcionesMezcladas.forEach(opcion => {
        const boton = document.createElement('button');
        boton.innerText = opcion;
        boton.className = "w-full text-left p-4 rounded-xl border text-base font-medium transition-all bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 cursor-pointer shadow-sm";
        
        boton.onclick = () => verificarRespuesta(opcion, preg);
        listaOpciones.appendChild(boton);
    });

    contenedorPregunta.classList.remove('hidden');
    contenedorPregunta.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Validar selección de respuesta con feedback de colores reactivos
function verificarRespuesta(opcionElegida, preg) {
    const botones = listaOpciones.getElementsByTagName('button');
    
    for (let boton of botones) {
        boton.classList.add('disabled-button'); 
        
        if (boton.innerText === preg.correcta) {
            boton.className = "w-full text-left p-4 rounded-xl border text-base font-medium transition-all bg-emerald-950 text-emerald-300 border-emerald-500 shadow-lg disabled-button font-bold";
        } else if (boton.innerText === opcionElegida) {
            boton.className = "w-full text-left p-4 rounded-xl border text-base font-medium transition-all bg-rose-950 text-rose-300 border-rose-500 disabled-button";
        } else {
            boton.className = "w-full text-left p-4 rounded-xl border text-base font-medium transition-all bg-slate-800/40 text-slate-500 border-transparent opacity-40 disabled-button";
        }
    }

    feedbackResultado.classList.remove('hidden');
    if (opcionElegida === preg.correcta) {
        feedbackResultado.innerText = '✅ ¡Buen análisis! Supiste detectar la trampa en el argumento.';
        feedbackResultado.className = "mt-6 p-4 rounded-xl text-center text-base font-bold border bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
        puntaje++;
        marcadorPuntaje.innerText = puntaje;
    } else {
        feedbackResultado.innerText = '❌ ¡Caíste en la trampa! Esa respuesta usa una lógica engañosa.';
        feedbackResultado.className = "mt-6 p-4 rounded-xl text-center text-base font-bold border bg-rose-500/10 text-rose-400 border-rose-500/20";
    }
}

// Disparador de inicio e inicialización gráfica base
btnGirar.addEventListener('click', girarRuleta);
dibujarRuleta();