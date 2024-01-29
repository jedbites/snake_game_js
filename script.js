// HTML Elements
const board = document.getElementById('game-board');

// Game Variables
let snake = [{x:10, y:10}];

// Game map, snake, and food
function draw() {
    board.innerHTML = '';
    drawSnake();
}

// Draw Snake
function drawSnake() {
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

// Create html elements for food or snake
function createGameElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

// Set position for food or snake
function setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Testing draw function
draw();