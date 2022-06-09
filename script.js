//variables
const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let time = 3;
let score = 0;

let palabra;

const palabraAleatoria = document.querySelector('#randomWord');
const inputPalabra = document.querySelector('#text');
const tiempo = document.querySelector('#timeSpan');
const puntaje = document.querySelector('#score');
const divGameOver = document.querySelector('#end-game-container');


//funciones
function randomWords() {
    let posicion = Math.floor(Math.random() * words.length); //nos dara un numero entero(floor); --length = el largo        
    palabra = words[posicion];
    return palabra;
}

function addToDOM() {
    palabra = randomWords();
    palabraAleatoria.textContent = palabra;
}

addToDOM();

inputPalabra.addEventListener('keyup', function (e) {

    if (e.keyCode == 13) {
        if (inputPalabra.value == palabra) {
            time = time + 3;
            inputPalabra.value = ''
            addToDOM();
            updateScore();
        }
    }
})

function actualizarTiempo() {
    time = time - 1;

    tiempo.textContent = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

let timeInterval = setInterval(actualizarTiempo, 1000);

function updateScore() {
    score = score + 1;
    puntaje.textContent = score;
}

function gameOver() {
    const titulo = document.createElement('h2');
    titulo.innerHTML = 'Time is Over';
    divGameOver.appendChild(titulo)

    const parrafo = document.createElement('p');
    parrafo.innerHTML = `Puntaje Final De La Partida: ${score}`;
    divGameOver.appendChild(parrafo);

    const boton = document.createElement('button');
    boton.innerHTML = 'Volver a Empezar';
    divGameOver.appendChild(boton);
    boton.addEventListener('click', function () {
        location.reload();
    })

    score

}


