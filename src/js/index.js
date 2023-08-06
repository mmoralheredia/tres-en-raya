import '../scss/index.scss'
import { randomTurnInit } from "./modules/functions"



// Seleccionar los elementos html a manipular.
const blockList = document.querySelectorAll('.block')
const screen = document.querySelector('.screen')
const controlInit = document.querySelector('.controls .initAndReset')
const controlStop = document.querySelector('.controls .stop ')


//Establecer las variables iniciales.
screen.innerHTML = 'Presione \"Iniciar\"...'
let turn = ''
let gameStatus = false



//Controles de Iniciar y Reiniciar el juego
controlInit.addEventListener('click', () => {
    if (controlInit.innerHTML === 'Iniciar') {
        controlInit.innerHTML = 'Reiniciar'
        gameStatus = true
        turn = randomTurnInit()
        updateScreen()
    } else if (controlInit.innerHTML === 'Reiniciar') {
        blockList.forEach(block => { block.innerHTML = '' })
        turn = randomTurnInit()
        updateScreen()
    }
})


//Control de Detener el juego
controlStop.addEventListener('click', () => {
    if (gameStatus) {
        controlInit.innerHTML = 'Iniciar'
        gameStatus = false
        turn = ''
        blockList.forEach(block => {
            block.innerHTML = ''
            block.classList = 'block'
        })
        updateScreen()
    }
})


//Control de bloques del tablero, y control del juego activo.
blockList.forEach((block, index) => {
    block.addEventListener('click', () => {

        if (gameStatus && turn === 'x' && blockList[index].innerHTML === '') {
            block.innerHTML = `<img src='src/sources/cross.png' class='blkCross'/>`
            changesOfTurn()
            updateScreen()
        } else if (gameStatus && turn === 'o' && blockList[index].innerHTML === '') {
            block.innerHTML = `<img src='src/sources/circle.png' class='blkCircle'/>`
            changesOfTurn()
            updateScreen()
        }
    })

})


//Declaración de Funciones
function updateScreen() {
    if (turn === 'x') {
        screen.innerHTML = 'Turno de X...'
    } else if (turn === 'o') {
        screen.innerHTML = 'Turno de O...'
    } else if (!gameStatus) {
        screen.innerHTML = 'PRESIONE \"INICIAR\"...'
    }
}

function changesOfTurn() {
    if (turn === 'x') {
        turn = 'o'
    } else {
        turn = 'x'
    }
}