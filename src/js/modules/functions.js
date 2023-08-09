export function gameActive(currentPlayer, gameTable, indexPlayed) {

    // Adding the current play to the game table
    gameTable[indexPlayed] = currentPlayer
    // todo:
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