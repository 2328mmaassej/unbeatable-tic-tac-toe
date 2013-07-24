function doHumanTurn(sender,row,col){
  if(currentGame[row][col] != BLANK){
    alert("Invalid move!");
    return;
  }
  sender.innerHTML = currentTurn;
  currentGame[row][col] = currentTurn;
  blankCount--;

  var winner = checkWinner(currentGame);
  if(winner != "notend"){
    if(winner == "draw"){
      alert("Draw!");
    }else{
      alert("Winner is " + winner + " !!!");
    }
    resetGame();
    return;
  }
  switchTurn();
  if(ONEPLAYER == true){
    doComputerTurn();
    winner = checkWinner(currentGame);
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
}
