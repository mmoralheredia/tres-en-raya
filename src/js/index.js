import '../scss/index.scss'
import { gameActive, changesCurrentPlayer, updateScreen, updateGameTable } from "./modules/functions.js";

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
    alertBackground.setAttribute('style', 'display: flex;')
    alertGameMode.setAttribute('style', 'display: flex;')
})

buttonStop.addEventListener('click', () => {
    if (gameStatus) {
        // Initialize game variables and redeclare 'gameStatus' to false
        gameTable.forEach((block, indexPlayed) => { })
    }
})


//* Eventos de escucha del tablero de juego y  BUCLE DEL JUEGO ACTIVO.
tableBlocks.forEach((block, indexPlayed) => {
    block.addEventListener('click', () => {
        if (gameStatus) {
            gameActive(currentPlayer, gameTable, indexPlayed)
            updateGameTable(block, currentPlayer)
            // currentPlayer = changesCurrentPlayer(currentPlayer)
            // updateScreen(gameScreen, currentPlayer)
        } else if (!gameStatus) {
            console.log('Estado del juego inactivo')
        }
    })
})

////////////////////////////////////////////////////////////////////////////////////////
//Botones dentro de la alerta del modo de juego.
buttonsGameMode.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            alertBackground.setAttribute('style', 'display: none;')
            alertGameMode.setAttribute('style', 'display: none;')
            gameStatus = true
            currentPlayer = 'x'
            // updateScreen(gameScreen, currentPlayer)


        } else if (button.className === 'playerVsPlayer') {
            alertBackground.setAttribute('style', 'display: none;')
            alertGameMode.setAttribute('style', 'display: none;')
        }
    })
})

buttonCloseGameMode.addEventListener('click', () => {
    alertBackground.setAttribute('style', 'display: none;')
    alertGameMode.setAttribute('style', 'display: none;')
})


// Todo: Botones dentro de la alerta del WinnerOrDraw
