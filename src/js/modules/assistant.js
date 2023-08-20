export function changesCurrentPlayer(currentPlayer) {
    if (currentPlayer === 'x') {
        return currentPlayer = 'o'
    } else if (currentPlayer === 'o') {
        return currentPlayer = 'x'
    }
}
