let colorArr = document.querySelectorAll('gameButton');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let start = document.getElementById('startButton')

let playerMoves = [];
let moves = [];


// start button event 

start.addEventListener('click', function () {
        startGame()
})

function startGame() {

    for (let x = 0; x < 15; x++){
        moves.push(Math.floor(Math.random() * 4) + 1)
    }
    console.log(moves)
        setInterval(compMoves, 2000)
}


function compMoves () {
    if (moves[1] === moves[1]){
        topLeft();
    } 
    if (moves[2] === moves[2]) {
        topRight();
    }
    if (moves[3] === moves[3]){
        bottomLeft();
    } 
    if (moves[4] === moves[4]){
        bottomRight();
    } 
    
}

function topLeft () {
    green.style.backgroundColor = "green"
}

function topRight () {
    red.style.backgroundColor = "red"
}

function bottomLeft () {
    yellow.style.backgroundColor = "yellow"
}

function bottomRight () {
    blue.style.backgroundColor = "blue"
}
