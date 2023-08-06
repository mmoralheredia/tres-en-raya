// Funciones random del juego
function randomTurnInit() {
    let randomCeroOrOne = Math.floor(Math.random() * 2)
    let turn = ''

    if (randomCeroOrOne === 0) {
        turn = 'o'
    } else {
        turn = 'x'
    }
    return turn
}

export { randomTurnInit }