import '../scss/index.scss'

// Obtener elementos del DOM a manipular en js.
const gameScreen = document.querySelector('.screen')
const buttonInit = document.querySelector('.controls .initAndReset')
const buttonStop = document.querySelector('.controls .stop')
const tableBlocks = document.querySelectorAll('.table .block')

// Obtener elementos de las alertas.
const alertBackground = document.querySelector('.alertBackground')

const alertGameMode = document.querySelector('.gameMode')
const buttonsGameMode = document.querySelectorAll('.gameMode .controls button')
const buttonCloseGameMode = document.querySelector('.gameMode #closeGameMode')

const alertWinnerOrDraw = document.querySelector('.winnerOrDraw')
const buttonsWinnerOrDraw = document.querySelectorAll('.winnerOrDraw .controls button')
const buttonCloseWinnerOrDraw = document.querySelector('.winnerOrDraw #closeWinnerOrDraw')

// Declaración de las variables globales del juego
let currentPlayer = ''
let gameStatus = false
let gameTable = ['', '', '', '', '', '', '', '', '']

// Establecer los valores iniciales del juego.
gameScreen.innerHTML = 'Presione \'Iniciar\'...'

//Configuración de escucha de botones de pantalla principal 'Iniciar' y 'Detener'
buttonInit.addEventListener('click', () => {
    console.log("Presionado el botón iniciar")
    alertBackground.setAttribute('style', 'display: flex;')
    alertGameMode.setAttribute('style', 'display: flex;')
})

buttonStop.addEventListener('click', () => {
    console.log('Botón Detener presionado')
})


// Eventos de escucha del tablero de juego
tableBlocks.forEach((block, index) => {
    block.addEventListener('click', function gameActive() {
        console.log(`Juego activo presiono el bloque ${index + 1}`)
    })
})


//Botones dentro de las alertas de modo de juego.
buttonsGameMode.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            console.log('Botón de modo de juego Player 1 VS PC, fue presionado')
            alertBackground.setAttribute('style', 'display: none;')
            alertGameMode.setAttribute('style', 'display: none;')
        } else if (button.className === 'playerVsPlayer') {
            console.log('Botón de modo de juego Player 1 VS Player 2, fue presionado')
            alertBackground.setAttribute('style', 'display: none;')
            alertGameMode.setAttribute('style', 'display: none;')
        }
    })
})

buttonCloseGameMode.addEventListener('click', () => {
    console.log("Botón de cerrar la alerta del \"modo de juego\" presionado")
    alertBackground.setAttribute('style', 'display: none;')
    alertGameMode.setAttribute('style', 'display: none;')
})

