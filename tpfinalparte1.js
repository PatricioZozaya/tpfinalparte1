
let imgPantallas = [];
let pantallas = [];
let pantallaActual = 0;
let musica;
let misonido;

function preload() {
  // Cargar las imágenes numeradas del 00 al 24.
  for (let i = 0; i <= 24; i++) {
       let numero = i < 10 ? "0" + i : i;
    imgPantallas[i] = loadImage("data/" + numero + ".png");
 
  }
  soundFormats ('mp3', 'ogg');
  misonido = loadSound ("data/cancionFondo.mp3");
}

function setup() {
  
  createCanvas(800, 450);
  textFont("sans-serif");
  textAlign(CENTER, CENTER);
 
  // PANTALLA 1: PRESENTACIÓN
  pantallas[0] = {
    imagen: 0,
    texto: "DOS ERIZAS Y MIL CUIDADOS\n\nConocé a Mora y Luna, dos pequeñas erizas africanas. Acompañalas en una aventura llena de decisiones sobre sus cuidados.",
    botones: [
      { texto: "Comenzar aventura", destino: 1 }
    ]
  };

  // PANTALLA 2: DECISIÓN SOBRE EL DESCANSO
  pantallas[1] = {
    imagen: 1,
    texto: "Mora y Luna están durmiendo en sus refugios. Durante el día necesitan descansar. ¿Qué hacemos?",
    botones: [
      { texto: "Dejarlas descansar", destino: 2 },
      { texto: "Despertarlas para jugar", destino: 3 },
      { texto: "Preparar su ambiente nocturno", destino: 4 }
    ]
  };

  // PANTALLA 3
  pantallas[2] = {
    imagen: 2,
    texto: "Respetamos su sueño y evitamos molestarlas. Mora y Luna descansan tranquilas y conservan su rutina.",
    botones: [
      { texto: "Continuar", destino: 5 }
    ]
  };

  // PANTALLA 4
  pantallas[3] = {
    imagen: 3,
    texto: "Las despertamos antes de tiempo. Mora sigue medio dormida y Luna busca esconderse. Comprendemos que necesitan descansar.",
    botones: [
      { texto: "Continuar", destino: 5 }
    ]
  };

  // PANTALLA 5
  pantallas[4] = {
    imagen: 4,
    texto: "Preparamos un espacio tranquilo, con refugios seguros y poca luz. Cuando llegue la noche, podrán explorar.",
    botones: [
      { texto: "Continuar", destino: 5 }
    ]
  };

  // PANTALLA 6: COMIENZA LA NOCHE
  pantallas[5] = {
    imagen: 5,
    texto: "Anochece. Mora asoma su hocico y Luna comienza a moverse. ¡Es hora de revisar su comida y el agua!",
    botones: [
      { texto: "Preparar la comida", destino: 6 }
    ]
  };

  // PANTALLA 7: DECISIÓN SOBRE LA ALIMENTACIÓN
  pantallas[6] = {
    imagen: 6,
    texto: "Las erizas tienen hambre. ¿Cómo elegimos su alimento?",
    botones: [
      { texto: "Darles una dieta adecuada", destino: 7 },
      { texto: "Probar un alimento desconocido", destino: 8 },
      { texto: "Olvidarnos de renovar el agua", destino: 9 }
    ]
  };

  // PANTALLA 8
  pantallas[7] = {
    imagen: 7,
    texto: "¡Buena elección! Les ofrecemos su alimentación habitual, equilibrada y apropiada para erizos, siguiendo indicaciones veterinarias.",
    botones: [
      { texto: "Continuar", destino: 10 }
    ]
  };

  // PANTALLA 9
  pantallas[8] = {
    imagen: 8,
    texto: "No todo alimento es seguro para ellas. Antes de ofrecer algo nuevo, investigamos y consultamos con un veterinario de animales exóticos.",
    botones: [
      { texto: "Continuar", destino: 10 }
    ]
  };

  // PANTALLA 10
  pantallas[9] = {
    imagen: 9,
    texto: "Notamos que el agua está sucia o se está terminando. La renovamos y comprobamos que siempre tengan agua fresca disponible.",
    botones: [
      { texto: "Continuar", destino: 10 }
    ]
  };

  // PANTALLA 11: HORA DE JUGAR
  pantallas[10] = {
    imagen: 10,
    texto: "Después de comer, Mora quiere explorar. Luna prefiere quedarse cerca de su refugio. ¿Cómo organizamos el juego?",
    botones: [
      { texto: "Dejarlas explorar a su ritmo", destino: 11 },
      { texto: "Insistir para que Luna juegue", destino: 12 },
      { texto: "Preparar juguetes seguros", destino: 13 }
    ]
  };

  // PANTALLA 12
  pantallas[11] = {
    imagen: 11,
    texto: "Mora recorre el espacio y Luna explora cuando se siente segura. Cada una tiene su propio ritmo y las supervisamos.",
    botones: [
      { texto: "Continuar", destino: 14 }
    ]
  };

  // PANTALLA 13
  pantallas[12] = {
    imagen: 12,
    texto: "Insistimos para que Luna juegue. Ella se hace una bolita, una señal de que debemos darle espacio y no forzar el contacto.",
    botones: [
      { texto: "Continuar", destino: 14 }
    ]
  };

  // PANTALLA 14
  pantallas[13] = {
    imagen: 13,
    texto: "Preparamos túneles, escondites y objetos seguros. Mora se entusiasma y Luna se acerca cuando se siente cómoda.",
    botones: [
      { texto: "Continuar", destino: 14 }
    ]
  };

  // PANTALLA 15: LIMPIEZA DEL HÁBITAT
  pantallas[14] = {
    imagen: 14,
    texto: "Terminó el juego. Revisamos el hábitat, retiramos los restos de comida y los desechos, y comprobamos que la temperatura sea adecuada.",
    botones: [
      { texto: "Continuar", destino: 15 }
    ]
  };

  // PANTALLA 16: DECISIÓN SOBRE LA LIMPIEZA
  pantallas[15] = {
    imagen: 15,
    texto: "Mora tiene las patitas un poco sucias y Luna está limpia. ¿Qué hacemos?",
    botones: [
      { texto: "Limpiar las patitas si hace falta", destino: 16 },
      { texto: "Darles un baño completo sin necesidad", destino: 17 },
      { texto: "Consultar si tenemos dudas", destino: 18 }
    ]
  };

  // PANTALLA 17
  pantallas[16] = {
    imagen: 16,
    texto: "Limpiamos con suavidad solo la zona que lo necesita y secamos bien a Mora. Evitamos estresarla con un baño innecesario.",
    botones: [
      { texto: "Continuar", destino: 19 }
    ]
  };

  // PANTALLA 18
  pantallas[17] = {
    imagen: 17,
    texto: "Un baño completo puede resultar estresante si no hace falta. Aprendemos que la higiene debe adaptarse a cada situación.",
    botones: [
      { texto: "Continuar", destino: 19 }
    ]
  };

  // PANTALLA 19
  pantallas[18] = {
    imagen: 18,
    texto: "Buscamos orientación veterinaria para saber cómo limpiarlas correctamente. Cuidar también significa pedir ayuda cuando no sabemos qué hacer.",
    botones: [
      { texto: "Continuar", destino: 19 }
    ]
  };

  // PANTALLA 20: DECISIÓN FINAL
  pantallas[19] = {
    imagen: 19,
    texto: "La noche avanza. Mora y Luna empiezan a buscar sus refugios. ¿Cómo queremos terminar el día?",
    botones: [
      { texto: "Preparar sus refugios para dormir", destino: 20 },
      { texto: "Seguir jugando aunque estén cansadas", destino: 21 },
      { texto: "Observarlas y respetar sus señales", destino: 22 }
    ]
  };

  // PANTALLA 21: FINAL 1
  pantallas[20] = {
    imagen: 20,
    texto: "FINAL 1: DULCES SUEÑOS, PEQUEÑAS\n\nMora y Luna descansan en sus refugios. Tuvieron comida adecuada, agua fresca y tiempo para explorar. Una rutina tranquila también es una forma de cariño.",
    botones: [
      { texto: "Volver al inicio", destino: 0 },
      { texto: "Ver créditos", destino: 24 }
    ]
  };

  // PANTALLA 22: FINAL 2
  pantallas[21] = {
    imagen: 21,
    texto: "FINAL 2: UN DÍA DEMASIADO AGITADO\n\nLas erizas están cansadas y necesitan tranquilidad. Comprendemos que forzar el juego o molestarlas durante el descanso no es una buena forma de cuidarlas.",
    botones: [
      { texto: "Volver al inicio", destino: 0 },
      { texto: "Ver créditos", destino: 24 }
    ]
  };

  // PANTALLA 23: FINAL 3
  pantallas[22] = {
    imagen: 22,
    texto: "FINAL 3: APRENDER TAMBIÉN ES CUIDAR\n\nAprendimos a reconocer las necesidades de Mora y Luna, respetar sus tiempos y buscar información confiable. Ahora podemos brindarles mejores cuidados.",
    botones: [
      { texto: "Volver al inicio", destino: 0 },
      { texto: "Ver créditos", destino: 24 }
    ]
  };

  // PANTALLA 24: CIERRE
  pantallas[23] = {
    imagen: 23,
    texto: "CADA ERIZA ES ÚNICA\n\nObservar, aprender y respetar sus necesidades es fundamental para su bienestar.",
    botones: [
      { texto: "Volver al inicio", destino: 0 },
      { texto: "Ver créditos", destino: 24 }
    ]
  };

  // PANTALLA 25: CRÉDITOS
  pantallas[24] = {
    imagen: 24,
    texto: "DOS ERIZAS Y MIL CUIDADOS\n\nAventura gráfica interactiva\n\nAutores: Patricio Zozaya y Ariadna Samira Tejeda Silva\n\nIlustraciones y programación: [COMPLETAR SEGÚN CORRESPONDA]\n\nGracias por acompañar a Mora y Luna.",
    botones: [
      { texto: "Volver al inicio", destino: 0 }
    ]
  };
}

function draw() {
  background(25);
misonido.play ();
  let p = pantallas[pantallaActual];

  // Imagen de fondo de la pantalla actual.
  if (imgPantallas[p.imagen]) {
    image(imgPantallas[p.imagen], 0, 0, width, height);
  }

  // Caja oscura para que el texto se lea mejor.
  noStroke();
  fill(0, 0, 0, 185);
  rect(30, 20, 740, 180, 12);

  // Texto narrativo.
  fill(255);
  textSize(19);
  textAlign(CENTER, CENTER);
  text(p.texto, 55, 35, 690, 150);

  // Dibujar los botones de la pantalla.
  for (let i = 0; i < p.botones.length; i++) {
    let b = p.botones[i];

    let altoBoton = 44;
    let espacio = 10;
    let totalAlto = p.botones.length * altoBoton +
                    (p.botones.length - 1) * espacio;
    let yInicial = height - 25 - totalAlto;
    let y = yInicial + i * (altoBoton + espacio);

    b.x = 100;
    b.y = y;
    b.w = 600;
    b.h = altoBoton;

    // Efecto al pasar el mouse.
    if (
      mouseX >= b.x &&
      mouseX <= b.x + b.w &&
      mouseY >= b.y &&
      mouseY <= b.y + b.h
    ) {
      fill(255, 220, 150);
    } else {
      fill(245);
    }

    stroke(70);
    strokeWeight(2);
    rect(b.x, b.y, b.w, b.h, 10);

    noStroke();
    fill(30);
    textSize(16);
    text(b.texto, b.x + 10, b.y + 4, b.w - 20, b.h - 8);
  }

  // Animación sencilla en la pantalla de créditos.
  if (pantallaActual === 24) {
    fill(255, 220, 150);
    textSize(30);
    text("♥", width - 50, 40 + sin(frameCount * 0.08) * 2);
  }
}

function mousePressed() {

  let p = pantallas[pantallaActual];

  for (let i = 0; i < p.botones.length; i++) {
    let b = p.botones[i];

    if (
      mouseX >= b.x &&
      mouseX <= b.x + b.w &&
      mouseY >= b.y &&
      mouseY <= b.y + b.h
    ) {
      pantallaActual = b.destino;
      break;
    }
  }
}
