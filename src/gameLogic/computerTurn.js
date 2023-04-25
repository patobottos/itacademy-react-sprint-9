import detectWinner from "./detectWinner";
import sumValuesOfLine from "./sumValuesOfLine";
import calculateDecomposed from "./calculateDecomposed";
import sticksToErase from "./sticksToErase";
import eraseSticks from "../gameMoves/eraseSticks";

function computerTurn(receivedValues, eraseStick) {
 console.log('newAllValues al llegar a ComputerTurn',receivedValues);

// TRANSFORMO OBJETO DE OBJETOS EN ARRAY DE OBJETOS. ESTO DEBERÍA MEJORARLO, POR AHORA LO DEJO ASÍ
  //const receivedBoardSetting = receivedValues.props;
  //console.log('receivedBoardSetting transformando receivedValues',receivedBoardSetting);
  
  // ANTES const nextValues = [...receivedBoardSetting];
  const nextValues = [...receivedValues];
  //console.log('nextValues al llegar a ComputerTurn',nextValues);

  // 1. WE DETECT IF THE USER IS A WINNER 
  detectWinner(receivedValues);

  // 2. COMPUTER READS THE BOARD
  const firstLineSum = sumValuesOfLine(receivedValues, 1);
  const secondLineSum = sumValuesOfLine(receivedValues, 3);
  const thirdLineSum = sumValuesOfLine(receivedValues, 5);
  const fourthLineSum = sumValuesOfLine(receivedValues, 7);
  
  const resultantValues = [];
  resultantValues.push(firstLineSum, secondLineSum,thirdLineSum,fourthLineSum ); 
    
  // 3. CALCULATE DECOMPOSED
  const decomposedValues = calculateDecomposed(resultantValues);
  //console.log('valuesAfterMove',decomposedValues);

  // 4. CHOSE STICKS TO ERASE
  const arraySticksToErase = sticksToErase(decomposedValues, receivedValues);
  console.log('receivedValues antes de borrado',receivedValues);

  // 5. COMPUTER MOVE
  arraySticksToErase.map(e => {
    const stickPositionToErase = e - 1;
    console.log('stickPositionToErase',stickPositionToErase);
    //console.log('stickPositionToErase tipo',typeof stickPositionToErase);
    eraseSticks(stickPositionToErase,receivedValues,nextValues);
    eraseStick(0);
  });

  console.log('receivedValues post erase',receivedValues);
  console.log('nextValues post erase',nextValues);

  // 6. PINTAMOS MOVIDA DEL ORDENADOR EN PANTALLA
// IDEAS?
  


}


export default computerTurn;