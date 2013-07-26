var PLAYER = "O";
var CPU = "X";
var BLANK = "_";
var ONEPLAYER = true;

var currentTurn = PLAYER;
var currentGame;
var blankCount = 9;
var oCells;

var cpuGameBoard;
var cpuCurrentTurn;

initCurrentGame();
initCPUGameBoard();
clearBoard();

function doHumanTurn(sender,row,col) {
  if(currentGame[row][col] != BLANK) {
    alert("Invalid move!");
    return;
  }
  sender.innerHTML = currentTurn;
  currentGame[row][col] = currentTurn;
  blankCount--;

  checkWinner();

  switchTurn();
}

function doComputerTurn() {
  minimax();

  checkWinner();
}

function checkWinner() {
  var winner = determineWinner(currentGame);
  if(winner != "notend"){
    if(winner == "draw"){
      alert("Draw!");
    }else{
      alert("Winner is " + winner + " !!!");
    }
    resetGame();
    return;
  }
}

function switchTurn() {
  if(currentTurn == PLAYER){
    currentTurn = CPU;
    doComputerTurn();
  }else{
    currentTurn = PLAYER;
  }
}

function switchCPUTurn() {
  if(cpuCurrentTurn == CPU)
    cpuCurrentTurn = PLAYER;
  else
    cpuCurrentTurn = CPU;
}


