import detectWinner from "./detectWinner";
import sumValuesOfLine from "./sumValuesOfLine";
import calculateDecomposed from "./calculateDecomposed";
import sticksToErase from "./sticksToErase";
import eraseSticks from "../gameMoves/eraseSticks";

function computerTurn(receivedValues) {

  // 0. WE SET THE PLAYER TO COMPUTER  ==> NO ESTÁ FUNCIONANDO
  //const playerAtCalculation = player;
  //console.log("está jugando", playerAtCalculation);

  console.log("newAllValues al llegar a ComputerTurn", receivedValues);
  console.log('tipo', typeof receivedValues);

  const nextValues = [...receivedValues];
  //console.log('nextValues al llegar a ComputerTurn',nextValues);

  // 1. WE DETECT IF THE USER IS A WINNER
  detectWinner(receivedValues);

  // 2. CREATE ARRAY OF STICK QUANTITY IN EACH LINE
  const firstLineSum = sumValuesOfLine(receivedValues, 1);
  const secondLineSum = sumValuesOfLine(receivedValues, 3);
  const thirdLineSum = sumValuesOfLine(receivedValues, 5);
  const fourthLineSum = sumValuesOfLine(receivedValues, 7);

  const sticksPerLine = [];
  sticksPerLine.push(
    firstLineSum,
    secondLineSum,
    thirdLineSum,
    fourthLineSum
  );
  console.log("Sicks per line", sticksPerLine);

  /* 
  // 2.A CREATE OBJECT OF STICKS TO ERASE (number of sticks, lineId)
  const sticksToEraseObj = {
    "lineId": null,
    "stickQuantity": null
  }

  // 2.B CHECK HOW MANY LINES GREATER THAN ONE
  const linesGreaterOne = (sticksPerLine.filter(line => line > 1)).length;
  console.log('num lines greater than 1: ',linesGreaterOne);

  // 2.C IN CASE ONLY ONE LINE GREATER THAN ONE, LINES GREATER THAN 0
  const linesGreaterZero = (sticksPerLine.filter(line => line > 0)).length;
  console.log('num lines greater than 0: ', linesGreaterZero);

  // 2.D FIND INDEX OF THE LINE WITH MAX OF STICKS
  //     IT WILL BE THE LINE WHERE WE WILL ERASE FROM
  const maxNumberOfSticks = Math.max(...sticksPerLine);
  const maxIndex = sticksPerLine.indexOf(maxNumberOfSticks);
  console.log('max index',maxIndex);

  // 2.E SEE IF REMAINING LINES WITH STICKS ARE ODD
  //     AND DETERMINE NUMBER OF STICKS TO ERASE
  const quantityToRemove = null;

  // IF LINES ARE ODD, WE LEAVE ONE STICK TO MAKE ODD NUMBER OF 1 ITEM LINES REMAINING
  if (linesGreaterZero % 2 === 1) {
    quantityToRemove = maxNumberOfSticks - 1;
  } else {
  // ELSE, WE REMOVE THE WHOLE LINE
  quantityToRemove = maxNumberOfSticks;
  };

  // 2.F DETERMINE LINE OF STICKS TO ERASE FROM
  


  
  
  // 2.F PUT NUMBER OF STICKS AND LINE TO ERASE FROM IN THE OBJECT
  sticksToEraseObj["lineId"] = maxIndex;
  sticksToEraseObj["stickQuantity"] = quantityToRemove;

*/ 


  // 3. CALCULATE DECOMPOSED
  const decomposedValues = calculateDecomposed(sticksPerLine);
  //console.log('valuesAfterMove',decomposedValues);

  // 4. CHOSE STICKS TO ERASE
  const arraySticksToErase = sticksToErase(decomposedValues, receivedValues, sticksPerLine);
  console.log("receivedValues antes de borrado", receivedValues);


/*   
  // 5. COMPUTER MOVE
  arraySticksToErase.map((e) => {
    const stickPositionToErase = e - 1;
    console.log("stickPositionToErase", stickPositionToErase);
    //console.log('stickPositionToErase tipo',typeof stickPositionToErase);
    eraseSticks(stickPositionToErase, receivedValues, nextValues);
  });

  console.log("receivedValues post erase", receivedValues);
  console.log("nextValues post erase", nextValues);

  // 6. PINTAMOS MOVIDA DEL ORDENADOR EN PANTALLA
  // IDEAS?

  // 7. CAMBIAMOS STATE DE JUGADOR
  //setPlayer("user");


*/  
}

export default computerTurn;
