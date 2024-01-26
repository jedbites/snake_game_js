// HTML Elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');

// Game Variables
const gridSize = 20;
let snake = [{x: 10, y:10}];
let food = generateFood();



