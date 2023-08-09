export function gameActive(currentPlayer, gameTable, indexPlayed) {
    // Añade la jugada actual al tablero de juego
    gameTable[indexPlayed] = currentPlayer
}

export function changesCurrentPlayer(currentPlayer) {
    if (currentPlayer === 'x') {
        return currentPlayer = 'o'
    } else if (currentPlayer === 'o') {
        return currentPlayer = 'x'
    }
}


export function updateScreen(gameScreen, currentPlayer) {
    if (currentPlayer === 'x') {
        gameScreen.innerHTML = 'Turno de \'X\''
    } else if (currentPlayer === 'x') {
        gameScreen.innerHTML = 'Turno de \'O\''
    }
}

export function updateGameTable(block, currentPlayer) {
    if (currentPlayer === 'x') {
        block.innerHTML = `<div class='blkCross'></div>`
    } else if (currentPlayer === 'o') {
        block.innerHTML = `<div class='blkCircle'></div>`
    }
}

export function turnOnAlertScreen(alertBackground, alertGameMode) {
    alertBackground.setAttribute('style', 'display: flex;')
    alertGameMode.setAttribute('style', 'display: flex;')
}

export function turnOffScreenAlert(alertBackground, alertGameMode) {
    alertBackground.setAttribute('style', 'display: none;')
    alertGameMode.setAttribute('style', 'display: none;')
}