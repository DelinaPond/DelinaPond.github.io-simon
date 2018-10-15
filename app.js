let colorArr = document.querySelectorAll('gameButton');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let start = document.getElementById('startButton');
let counter = document.getElementById('roundCounter');
let on = document.getElementById('turnOn')
console.log(colorArr.document)
let interval; 
let playerMoves = [];
let moves = [];
let lightOrder;
change = 0;
turn = 1;


// start button event begins game and logs the counter

start.addEventListener('click', function () {
    counter.innerHTML = "01";    
    startGame()
})

// function to begin the game that pushes number array into the moves made to be followed by the player 
function startGame() {
  
    for (let x = 0; x < 15; x++){
        moves.push(Math.floor(Math.random() * 4) + 1)
        console.log(moves[x])
       
    }
    lightOrder = true;

    interval = setInterval(compMoves, 2000)
    
}

// function to define the number array and change background style called through functions 

function compMoves () {


    if (change == turn) {
        clearInterval(interval);
        lightOrder = false;
        clearLights();
      }

    if (lightOrder) {
            clearLights();
    setTimeout ( function () {
    if (moves[change] == 1){
        topLeft();
        
        
    } 
    if (moves[change] == 2) {
        topRight();
        
       
    }
    if (moves[change] == 3){
        bottomLeft();
        
        
    } 
    if (moves[change] == 4){
        bottomRight();
        
      

    }
    change++;
    }, 800);
  }
}

// created functions to background the light divs to be called in previous function compMoves(line 40)
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

// function to change game light colors back to original (styled strangely for easy visibility, will update later)
function clearLights () {
    green.style.backgroundColor = "orange"
    red.style.backgroundColor = "purple"
    blue.style.backgroundColor = "black"
    yellow.style.backgroundColor = "white"

}

// making game light divs clickable so player can click on game divs and they "light up"

green.addEventListener('click', function () {
    playerMoves.push(1);
    topLeft();
    setTimeout( function () {
        clearLights();
    }, 200)
    
} )
red.addEventListener('click', function () {
    playerMoves.push(2);
    topRight();
    setTimeout( function () {
        clearLights();
    }, 200)
} )
yellow.addEventListener('click', function () {
    playerMoves.push(3);
    bottomLeft();
    setTimeout( function () {
        clearLights();
    }, 200)
} )
blue.addEventListener('click', function () {
    playerMoves.push(4);
    bottomRight();
    setTimeout( function () {
        clearLights();
    }, 200)
} )