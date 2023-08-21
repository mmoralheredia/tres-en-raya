import '../scss/index.scss'
import * as gameFunctions from "./modules/main.js"
import * as visualsFunctions from './helpers/visuals.js'
import * as assistantFunctions from './modules/assistant.js'

// OBTENER ELEMENTOS DEL DOM A MANIPULAR EN JS, Y VALORES INICIALES DE EL JUEGO
// Elementos de la pantalla principal.
const gameScreen = document.querySelector('.screen')
const buttonInit = document.querySelector('.controls .init')
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
const textWinnerOrDraw = document.querySelector('.winnerOrDraw h1')
const buttonsWinnerOrDraw = document.querySelectorAll('.winnerOrDraw .controls button')
const buttonCloseWinnerOrDraw = document.querySelector('.winnerOrDraw #closeWinnerOrDraw')

// Declaración de las variables globales del juego
let currentPlayer = ''
let gameStatus = false
let gameTable = ['', '', '', '', '', '', '', '', '']

// Establecer los valores iniciales del juego.
gameScreen.innerHTML = 'Presione \'Iniciar\'...' //Valor inicial de la pantalla de juego.

//* EJECUCIÓN DEL JUEGO
//* ESCUCHA DEL TABLERO DE JUEGO Y BUCLE DEL JUEGO ACTIVO.
tableBlocks.forEach((block, indexPlayed) => {
    block.addEventListener('click', () => {
        if (gameStatus && block.innerHTML === '') {
            gameFunctions.gameActive(currentPlayer, gameTable, indexPlayed)
            visualsFunctions.updateTableBlocks(block, currentPlayer)

            if (gameFunctions.checkWinnerOrDraw(gameTable) === 'ganador') {
                visualsFunctions.turnOnAlertScreen(alertBackground, alertWinnerOrDraw)
                textWinnerOrDraw.innerHTML = `Gana '${currentPlayer.toUpperCase()}'`
                gameScreen.innerHTML = `Gana '${currentPlayer.toUpperCase()}'`
                gameStatus = false
            } else if (gameFunctions.checkWinnerOrDraw(gameTable) === 'tabla') {
                visualsFunctions.turnOnAlertScreen(alertBackground, alertWinnerOrDraw)
                textWinnerOrDraw.innerHTML = `Empate`
                gameScreen.innerHTML = `Empate`
                gameStatus = false
            } else {
                currentPlayer = assistantFunctions.changesCurrentPlayer(currentPlayer)
                visualsFunctions.updateScreen(gameScreen, currentPlayer)
            }
        }
    })
})

//Escucha de botones de pantalla principal 'Iniciar' y 'Detener'
buttonInit.addEventListener('click', () => {
    if (!gameStatus) {
        visualsFunctions.turnOnAlertScreen(alertBackground, alertGameMode)
    }
})

buttonStop.addEventListener('click', () => {
    // Reiniciar las variables del juego y establecer el [gameStatus] a "false"
    tableBlocks.forEach(block => { block.innerHTML = '' })
    for (let block in gameTable) { gameTable[block] = '' }
    gameStatus = false
    gameScreen.innerHTML = 'Presione \'Iniciar\'...'
})

//* Controles de la pantalla de alerta [gameMode]
buttonsGameMode.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            //todo: modo contra PC

        } else if (button.className === 'playerVsPlayer') {
            visualsFunctions.turnOffScreenAlert(alertBackground, alertGameMode)
            buttonStop.click()
            gameStatus = true
            currentPlayer = assistantFunctions.randomPlayerInit()
            visualsFunctions.updateScreen(gameScreen, currentPlayer)
        }
    })
})

buttonCloseGameMode.addEventListener('click', () => {
    visualsFunctions.turnOffScreenAlert(alertBackground, alertGameMode)
})

//* Controles de la pantalla de alerta [winnerOrDraw]
buttonsWinnerOrDraw.forEach(button => {
    button.addEventListener('click', () => {
        if (button.className === 'playerVsPC') {
            //todo: modo contra PC

        } else if (button.className === 'playerVsPlayer') {
            visualsFunctions.turnOffScreenAlert(alertBackground, alertWinnerOrDraw)
            buttonStop.click()
            gameStatus = true
            currentPlayer = assistantFunctions.randomPlayerInit()
            visualsFunctions.updateScreen(gameScreen, currentPlayer)
        }
    })
})

buttonCloseWinnerOrDraw.addEventListener('click', () => {
    visualsFunctions.turnOffScreenAlert(alertBackground, alertWinnerOrDraw)
})