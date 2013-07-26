function initCurrentGame() {
  currentGame = new Array(3);
  for(var i = 0 ; i < currentGame.length ; i++)
  {
    currentGame[i] = new Array(3);
    for(var j = 0 ; j < currentGame[i].length ; j++)
    {
        currentGame[i][j] = BLANK;
    }
  }
}

function initCPUGameBoard() {
  cpuGameBoard = new Array(3);
  for(var i = 0 ; i < cpuGameBoard.length ; i++) {
    cpuGameBoard[i] = new Array(3);
  }
}

function setMove(row,col,turn) {
  var pos = row*3 + col;
  oCells[pos].innerHTML = turn;
}

function determineWinner(gameBoard) {
  for(var i = 0 ; i < gameBoard.length ; i++) {
    if(gameBoard[i][0] == gameBoard[i][1] &&
      gameBoard[i][1] == gameBoard[i][2])
    {
      if(gameBoard[i][0] != BLANK){
        return gameBoard[i][0];
      }
    }
  }

  for(var j = 0 ; j < gameBoard[0].length ; j++) {
    if(gameBoard[0][j] == gameBoard[1][j] &&
      gameBoard[1][j] == gameBoard[2][j])
    {
      if(gameBoard[0][j] != BLANK) {
        return gameBoard[0][j];
      }
    }
  }

  if((gameBoard[0][0] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][2]) ||
    (gameBoard[0][2] == gameBoard[1][1] &&
    gameBoard[1][1] == gameBoard[2][0]))
  {
    if(gameBoard[1][1] != BLANK) {
      return gameBoard[1][1];
    }
  }

  if(blankCount == 0) {
    return "draw";
  }
  return "notend";
}

function copyGameBoard() {
  for(var i = 0 ; i < cpuGameBoard.length ; i++) {
    for(var j = 0 ; j < cpuGameBoard[i].length; j++) {
      cpuGameBoard[i][j] = currentGame[i][j];
    }
  }
}

function resetGame() {
  blankCount = 9;
  clearBoard();
  currentTurn = PLAYER;

  for(var i = 0 ; i < currentGame.length ; i++) {
    for(var j = 0 ; j < currentGame[i].length ; j++) {
      currentGame[i][j] = BLANK;
    }
  }
}

function clearBoard() {
  oCells = document.getElementsByName("board");
  for(var i = 0 ; i < oCells.length ; i++) {
    oCells.item(i).innerHTML = "";
  }
}

