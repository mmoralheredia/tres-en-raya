export function gameActive(currentPlayer, gameTable, indexPlayed) {
    // Añade la jugada actual al tablero de juego
    if (gameTable[indexPlayed] === '') {
        gameTable[indexPlayed] = currentPlayer
    }
    console.log(gameTable)
}

