import '../scss/index.scss'
import * as gameFunctions from "./modules/functions.js";

// OBTENER ELEMENTOS DEL DOM A MANIPULAR EN JS, Y VALORES INICIALES DE EL JUEGO
// Elementos de la pantalla principal.
const gameScreen = document.querySelector('.screen')
const buttonInit = document.querySelector('.controls .initAndReset')
const buttonStop = document.querySelector('.controls .stop')
const tableBlocks = document.querySelectorAll('.table .block')

// Elementos de las pantallas de alertas.
// Background de las alertas
const alertBackground = document.querySelector('.alertBackground')
// Alerta para seleccionar el modo de juego
const alertGameMode = document.querySelector('.gameMode')
const buttonsGameMode = document.querySelectorAll('.gameMode .controls button')
const buttonCloseGameMode = document.querySelector('.gameMode #closeGameMode')
// Alerta para mostrar el ganador, y la oportunidad de regresar al juego, asi como cambiar de modo de juego.
const alertWinnerOrDraw = document.querySelector('.winnerOrDraw')
const buttonsWinnerOrDraw = document.querySelectorAll('.winnerOrDraw .controls button')
const buttonCloseWinnerOrDraw = document.querySelector('.winnerOrDraw #closeWinnerOrDraw')

// Declaración de las variables globales del juego
let currentPlayer = ''
let gameStatus = false
let gameTable = ['', '', '', '', '', '', '', '', '']

// Establecer los valores iniciales del juego.
gameScreen.innerHTML = 'Presione \'Iniciar\'...' //Valor inicial de la pantalla de juego.

//* EJECUCIÓN DEL JUEGO
//Escucha de botones de pantalla principal 'Iniciar' y 'Detener'
buttonInit.addEventListener('click', () => {
    if (!gameStatus) {
        gameFunctions.turnOnAlertScreen(alertBackground, alertGameMode)
    }
})

buttonStop.addEventListener('click', () => {
    if (gameStatus) {
        // Reiniciar las variables del juego y restablecer el [gameStatus] a "false"
        gameTable.forEach((block, indexPlayed) => {
            // todo: Reiniciar el tablero de juego
        })
    }
})

//* Controles de la pantalla de alerta [gameMode]
buttonsGameMode.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            gameFunctions.turnOffScreenAlert(alertBackground, alertGameMode)
            gameStatus = true
            currentPlayer = 'x'

        } else if (button.className === 'playerVsPlayer') {
            gameFunctions.turnOffScreenAlert(alertBackground, alertGameMode)
        }
    })
})

buttonCloseGameMode.addEventListener('click', () => {
    gameFunctions.turnOffScreenAlert(alertBackground, alertGameMode)
})


//* Controles de la pantalla de alerta [winnerOrDraw]
buttonsWinnerOrDraw.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            gameFunctions.turnOffScreenAlert(alertBackground, alertWinnerOrDraw)
            gameStatus = true
            currentPlayer = 'x'

        } else if (button.className === 'playerVsPlayer') {
            gameFunctions.turnOffScreenAlert(alertBackground, alertWinnerOrDraw)
        }
    })
})

buttonCloseWinnerOrDraw.addEventListener('click', () => {
    gameFunctions.turnOffScreenAlert(alertBackground, alertWinnerOrDraw)
})


//* ESCUCHA DEL TABLERO DE JUEGO Y BUCLE DEL JUEGO ACTIVO.
tableBlocks.forEach((block, indexPlayed) => {
    block.addEventListener('click', () => {
        if (gameStatus) {
            gameFunctions.gameActive(currentPlayer, gameTable, indexPlayed)
            gameFunctions.updateGameTable(block, currentPlayer)
            currentPlayer = gameFunctions.changesCurrentPlayer(currentPlayer)
            // todo: Terminar la ejecución de que hacer en cada jugada en el tablero
        }
    })
})



