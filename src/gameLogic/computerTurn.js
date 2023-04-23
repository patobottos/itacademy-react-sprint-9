import detectWinner from "./detectWinner";
import sumValuesOfLine from "./sumValuesOfLine";
import calculateDecomposed from "./calculateDecomposed";
import stickToErase from "./stickToErase";

function computerTurn(receivedValues) {
  //console.log('newAllValues al llegar a ComputerTurn',receivedValues);

// TRANSFORMO OBJETO DE OBJETOS EN ARRAY DE OBJETOS. ESTO DEBERÍA MEJORARLO, POR AHORA LO DEJO ASÍ
  const receivedBoardSetting = receivedValues.props;

  // 1. WE DETECT IF THE USER IS A WINNER 
  detectWinner(receivedBoardSetting);

  // 2. COMPUTER READS THE BOARD
  const firstLineSum = sumValuesOfLine(receivedBoardSetting, 1);
  const secondLineSum = sumValuesOfLine(receivedBoardSetting, 3);
  const thirdLineSum = sumValuesOfLine(receivedBoardSetting, 5);
  const fourthLineSum = sumValuesOfLine(receivedBoardSetting, 7);
  
  const resultantValues = [];
  resultantValues.push(firstLineSum, secondLineSum,thirdLineSum,fourthLineSum ); 
    
  // 3. CALCULATE DECOMPOSED
  const decomposedValues = calculateDecomposed(resultantValues);
  //console.log('valuesAfterMove',decomposedValues);

  // 4. CHOSE ROW TO ERASE
  stickToErase(decomposedValues, receivedBoardSetting);


/*
  // 3. COMPUTER DETECTS IF IT WINS
  //detectWinner(newBoardSetting)

*/


}

export default computerTurn;