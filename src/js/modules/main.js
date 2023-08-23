export function gameActive(currentPlayer, gameTable, indexPlayed) {
    // Añade la jugada actual al tablero de juego
    if (gameTable[indexPlayed] === '') {
        gameTable[indexPlayed] = currentPlayer
    }
}


export function checkWinnerOrDraw(gameTable) {
    if (gameTable[0] != '' && gameTable[0] === gameTable[1] && gameTable[0] === gameTable[2]
        || gameTable[3] != '' && gameTable[3] === gameTable[4] && gameTable[3] === gameTable[5]
        || gameTable[6] != '' && gameTable[6] === gameTable[7] && gameTable[6] === gameTable[8]
        || gameTable[0] != '' && gameTable[0] === gameTable[3] && gameTable[0] === gameTable[6]
        || gameTable[1] != '' && gameTable[1] === gameTable[4] && gameTable[1] === gameTable[7]
        || gameTable[2] != '' && gameTable[2] === gameTable[5] && gameTable[2] === gameTable[8]
        || gameTable[0] != '' && gameTable[0] === gameTable[4] && gameTable[0] === gameTable[8]
        || gameTable[2] != '' && gameTable[2] === gameTable[4] && gameTable[2] === gameTable[6]
    ) {
        return 'ganador'
    } else if (!gameTable.includes('')) {
        return 'tabla'
    }
}

export function playPC(gameTable) {
    let randomPlayPc = Math.floor(Math.random() * 9)
    while (gameTable[randomPlayPc] != '') {
        randomPlayPc = Math.floor(Math.random() * 9)
    }
    return randomPlayPc
}