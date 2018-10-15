let colorArr = document.querySelectorAll('gameButton');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let start = document.getElementById('startButton');
let counter = document.getElementById('roundCounter');
let on = document.getElementById('turnOn')

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
  
    // for (let x = 0; x < 15; x++){
        moves.push(Math.floor(Math.random() * 4) + 1)
        // console.log(moves[x])
       
    // }
    lightOrder = true;

    compMoves()
    
}

// function to define the number array and change background style called through functions 

function compMoves () {
  for (let x = 0; x < moves.length; x++){
        console.log(moves[x])
        setTimeout(function(){

     
        if (moves[x] === 1){
            
            setTimeout( function () {
                topLeft()
            }, 900)
            setTimeout(function () {
                clearLights()
            }, 2000)
        }
        if (moves[x] === 2){
            setTimeout( function () {
                topRight()
            }, 900)
            setTimeout(function () {
                clearLights()
            }, 2000)
        }
        if (moves[x] === 3){
            setTimeout( function () {
                bottomLeft()
            }, 900)
            setTimeout(function () {
                clearLights()
            }, 2000)
        }
        if (moves[x] === 4){
            setTimeout( function () {
                bottomRight()
            }, 900)
            setTimeout(function () {
                clearLights()
            }, 2000)
        }
    
        }, 600 * (x + 1) )
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
        checkMoves();
        
    }, 400)
    
} )
red.addEventListener('click', function () {
    playerMoves.push(2);
    topRight();
    setTimeout( function () {
        clearLights();
        checkMoves();
    }, 400)
} )
yellow.addEventListener('click', function () {
    playerMoves.push(3);
    bottomLeft();
    setTimeout( function () {
        clearLights();
        checkMoves();
    }, 400)
} )
blue.addEventListener('click', function () {
    playerMoves.push(4);
    bottomRight();
    
    setTimeout( function () {
        clearLights();
        checkMoves();
    }, 400)
} )

function checkMoves () {
    for (let x = 0; x < playerMoves.length; x++){
       if (playerMoves[x] === moves[x]){
           console.log("correct")
           
         if(playerMoves.length === moves.length && playerMoves[x] === moves[x]){
            playerMoves = []
            turn++;
             counter.innerHTML = turn;
            
          
           startGame();
         }
       }
       else{
           console.log("incorrect")
           playerMoves = []
           moves = []
           turn = 01;
           counter.innerHTML = turn;
       }
       
    }

  
  
}
