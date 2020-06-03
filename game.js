import { update as updateSnake, draw as drowSnake, snakeSpeed } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    let secSinceLasteRender = (currentTime - lastRenderTime) / 1000
    if (secSinceLasteRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
}
function draw() {
    gameBoard.innerHTML = ''
    drowSnake(gameBoard)
    drawFood(gameBoard)
}