// Funciones visuales para el juego
export function updateTableBlocks(block, currentPlayer) {
    if (currentPlayer === 'x') {
        block.innerHTML = `<div class='blkCross'><img src="/src/assets/cross.png" alt="cross" /></div>`
    } else if (currentPlayer === 'o') {
        block.innerHTML = `<div class='blkCircle'><img src="/src/assets/circle.png" alt="cross" /></div>`
    }
}

export function updateScreen(gameScreen, currentPlayer) {
    if (currentPlayer === 'x') {
        gameScreen.innerHTML = 'Turno de \'X\''
    } else if (currentPlayer === 'x') {
        gameScreen.innerHTML = 'Turno de \'O\''
    }
}

export function turnOnAlertScreen(alertBackground, alertType) {
    alertBackground.setAttribute('style', 'display: flex;')
    alertType.setAttribute('style', 'display: flex;')
}

export function turnOffScreenAlert(alertBackground, alertType) {
    alertBackground.setAttribute('style', 'display: none;')
    alertType.setAttribute('style', 'display: none;')
}
