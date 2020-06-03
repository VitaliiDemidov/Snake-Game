import { update as updateSnake, draw as drowSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood, } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {

    if (gameOver) {
        if (confirm('You lost.Press OK to restart')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    let secSinceLasteRender = (currentTime - lastRenderTime) / 1000
    if (secSinceLasteRender < 1 / snakeSpeed) return

    lastRenderTime = currentTime
    update()
    draw()
    checkDeath()
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

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}