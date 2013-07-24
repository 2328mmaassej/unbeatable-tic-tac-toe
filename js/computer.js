function doComputerTurn(){
  if(currentTurn != CPU) return;
  if(blankCount == 0) return;
  copyGameBoard();
  cpuCurrentTurn = CPU;
  var res,ci,cj,choose = -1000;
  document.getElementById("ai").innerHTML="";
  for(var i = 0 ; i < cpuGameBoard.length ; i++){
    for(var j = 0 ; j < cpuGameBoard[i].length ; j++){
      if(cpuGameBoard[i][j] == BLANK){
        cpuGameBoard[i][j] = cpuCurrentTurn;
        blankCount--;
        switchCPUTurn();
        res = searchMove(1);
        document.getElementById("ai").innerHTML+="app " + i + "," + j + " " + res + "<br>";
        cpuGameBoard[i][j] = BLANK;
        blankCount++;
          if(choose == -1000){
            choose = res;
            ci = i;
            cj = j;
          }else if(res > choose){
            choose = res;
            ci = i;
            cj = j;
          }
        switchCPUTurn();
      }
    }
  }
        document.getElementById("ai").innerHTML+="choose=" + choose + " ci=" + ci + " cj=" + cj;
        currentGame[ci][cj] = CPU;
        blankCount--;
        setMove(ci,cj,CPU);
        switchTurn();
}

function searchMove(level){
  var res = checkWinner(cpuGameBoard);
  if(res == CPU){
    return  100-level;
  }else if(res == PLAYER){
    return level-100;
  }else if(res == "draw"){
    return 0;
  }

  var choose = -1000;
  var temp;

  for(var i = 0 ; i < cpuGameBoard.length ; i++){
    for(var j = 0 ; j < cpuGameBoard[i].length ; j++){
      if(cpuGameBoard[i][j] == BLANK){
        cpuGameBoard[i][j] = cpuCurrentTurn;
        switchCPUTurn();
        blankCount--;
        temp = searchMove(level + 1);
        switchCPUTurn();
        cpuGameBoard[i][j] = BLANK;
        blankCount++;
        if(choose == -1000){
          choose = temp;
        }else if(cpuCurrentTurn == CPU){
          if(temp > choose) choose = temp;
        }else if(cpuCurrentTurn == PLAYER){
          if(temp < choose) choose = temp;
        }
      }
    }
  }
  return choose;
}
