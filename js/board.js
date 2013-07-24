function initCurrentGame(){
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

function initCPUGameBoard(){
  cpuGameBoard = new Array(3);
  for(var i = 0 ; i < cpuGameBoard.length ; i++){
    cpuGameBoard[i] = new Array(3);
  }
}

function setMove(row,col,turn){
  var pos = row*3 + col;
  oCells[pos].innerHTML = turn;
}

function copyGameBoard(){
  for(var i = 0 ; i < cpuGameBoard.length ; i++){
    for(var j = 0 ; j < cpuGameBoard[i].length; j++){
      cpuGameBoard[i][j] = currentGame[i][j];
    }
  }
}

function clearBoard(){
  oCells = document.getElementsByName("board");
  for(var i = 0 ; i < oCells.length ; i++){
    oCells.item(i).innerHTML = "";
  }
}

function resetGame(){
  blankCount = 9;
  clearBoard();
  currentTurn = PLAYER;

  for(var i = 0 ; i < currentGame.length ; i++){
    for(var j = 0 ; j < currentGame[i].length ; j++){
      currentGame[i][j] = BLANK;
    }
  }
}
