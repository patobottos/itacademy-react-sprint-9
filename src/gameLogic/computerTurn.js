// DEPRECATED FILE





import detectWinner from "./detectWinner";
import calculateSticksPerLine from "./calculateSticksPerLine";
import sticksToErase from "./sticksToErase";

function computerTurn(allValues, setAllValues, humanPlayer, setHumanPlayer) {

  // 1. WE SET THE PLAYER TO COMPUTER  ==> NO ESTÁ FUNCIONANDO
  //const playerAtCalculation = player;
  //console.log("está jugando", playerAtCalculation);
  console.log("allValues post borrado al llegar a ComputerTurn", allValues);

  const receivedValues = [...allValues];

  // 2. WE DETECT IF THE USER IS A WINNER
  detectWinner(receivedValues);

  // 3. CREATE ARRAY OF NUMBER OF STICKS IN EACH LINE
  const sticksPerLine = calculateSticksPerLine(receivedValues);
  console.log('sticksPerLine',sticksPerLine);

  // 4. COMPUTER CHOSES STICK OR STICKS TO ERASE
  const arraySticksToErase = sticksToErase(receivedValues);
  console.log("arraySticksToErase en ComputerTurn", arraySticksToErase);

  // 5. WE PAINT THE NEW KEYBOARD SETTING
  setAllValues(arraySticksToErase);

  // 6. CHANGE STATE OF PLAYER... HERE? CUANDO LO PONGO NO ME FUNCIONA...
  setHumanPlayer(!humanPlayer);

}

export default computerTurn;
