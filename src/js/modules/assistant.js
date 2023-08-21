export function changesCurrentPlayer(currentPlayer) {
    if (currentPlayer === 'x') {
        return currentPlayer = 'o'
    } else if (currentPlayer === 'o') {
        return currentPlayer = 'x'
    }
}

export function randomPlayerInit() {
    let randomPlayer = ''
    let numberRandom = Math.floor(Math.random() * 2)
    numberRandom === 1 ? randomPlayer = 'x' : randomPlayer = 'o'

    return randomPlayer
}