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

function checkWinner(gameBoard){
  for(var i = 0 ; i < gameBoard.length ; i++){
    if(gameBoard[i][0] == gameBoard[i][1] &&
      gameBoard[i][1] == gameBoard[i][2])
    {
      if(gameBoard[i][0] != BLANK){
        return gameBoard[i][0];
      }
    }
  }

  for(var j = 0 ; j < gameBoard[0].length ; j++){
    if(gameBoard[0][j] == gameBoard[1][j] &&
      gameBoard[1][j] == gameBoard[2][j])
    {
      if(gameBoard[0][j] != BLANK){
        return gameBoard[0][j];
      }
    }
  }

  if((gameBoard[0][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][2]) ||
    (gameBoard[0][2] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][0]))
  {
    if(gameBoard[1][1] != BLANK){
      return gameBoard[1][1];
    }
  }

  if(blankCount == 0){
    return "draw";
  }
  return "notend";
}

function switchTurn(){
  if(currentTurn == PLAYER){
    currentTurn = CPU;
  }else{
    currentTurn = PLAYER;
  }
}

function switchCPUTurn(){
  if(cpuCurrentTurn == CPU)
    cpuCurrentTurn = PLAYER;
  else
    cpuCurrentTurn = CPU;
}


