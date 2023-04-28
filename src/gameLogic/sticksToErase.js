import chooseRandomLine from "./chooseRandomLine";

const sticksToErase = (decomposedValues, receivedBoardSetting, sticksPerLine) => {
  //console.log('decomposedValues inicio rowToErase',decomposedValues);
  
  const boardSettingInputToErase = [...receivedBoardSetting];
  //console.log('boardSettingInputToErase al inicio f erase',boardSettingInputToErase);

  const sumLine = (arr) => {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  };

  const onesSum = sumLine(sumLine(decomposedValues[0]));
  const twosSum = sumLine(sumLine(decomposedValues[1]));
  const foursSum = sumLine(sumLine(decomposedValues[2]));
  const onesTwosFours = [];

  console.log("onesTwosFours tipo", typeof onesTwosFours);

  onesTwosFours.push(onesSum, twosSum, foursSum);
  console.log("onesTwosFours", onesTwosFours);

  let unpaired = [];

  //FIND UNPAIRED GROUP OF STICKS
  const findUnpaired = () => {
    unpaired = onesTwosFours.map((number) => {
      return number % 2 !== 0;
    });
  };

  findUnpaired();
  console.log("unpaired", unpaired);

  // ARE WE ALREADY IN A WINNING POSITION (NIM SUM = 0 ?)
  const findWinningPosition = unpaired.reduce((accumulator, currentValue) => accumulator * currentValue);
  findWinningPosition === 1 ? console.log('Winning position') : console.log("Keep searching") //...AND EXECUTE ;

  const arraySticksToErase = [];

  // FIND STICKS TO ERASE
  const findSticksToErase = () => {
    // WE FILTER ONLY VALID STICKS STILL PLAYING
    const enabledSticks = receivedBoardSetting.filter(validSticks => validSticks.stickValue != 0);

    //WE FIND LINES WITH STICKS PLAYING

    const availableLines = enabledSticks
    .map((item) => item.lineId)
    .filter((value, index, currentValue) => currentValue.indexOf(value) === index);
    //console.log('availableLines', availableLines);


 /* HASTA AQUÍ LLEGUÉ */


/*
    
    if (sticksPerLine[0] != 0) {
      availableLines.push(1)
    } else if (sticksPerLine[1] != 0) {
      availableLines.push(3)
    } else if (sticksPerLine[1] != 0) {
      availableLines.push(3)
      else if (sticksPerLine[1] != 0) {
        availableLines.push(3)

    sticksPerLine.map(element => {
      element != 0 ? availableLines.push((indexOf(element) + 1)) : availableLines.push(false)
    });
       */

    // WE START TRYING
   

    console.log('available sticks',enabledSticks);
    console.log('availableLines',availableLines);

 

  }

findSticksToErase();
  
  /*
1) Busco la línea con más palitos: idLine
2) Borro 1 palito, el último con value != 0 
3) Pruebo si findWinningPosition === 1 ? 

3A) Si sí, subo el id del palito en la arraySticksToErase...
4A) Actualizo valor en la array boardSettingInputToErase => encontrar esos ids, y cambiar valor del palito a 0 y valor del enabled a false
5A) FIN del turno de la computadora. Pasar boardSettingInputToErase al Gameboard. Actualizar tablero en Gameboard. Cambiar state a setHumanPlayer(true)

3B) Si no, subo id palito en arraySticksToErase, con valor del palito a 0 y valor del enabled a false
4B) y sigo buscando, siempre que la misma línea
5B) Si llego al final de la línea y no hay findWinningPosition === 1,arraySticksToErase = [null]
6B) Aplico búsqueda en la línea siguiente. aplico 3b




  */

/* METODO 24/4/23 => NO HA FUNCIONADO

  //CASE 1: ALL VALUES PAIRED...
  if (
    unpaired[0] === false && 
    unpaired[1] === false && 
    unpaired[2] === false
  ) {
    console.log("CASE 1: nim sum = 0");
    const lineIdToErase = chooseRandomLine(receivedBoardSetting);
    const stickToErase = receivedBoardSetting.findIndex((stick) => {
      return stick.stickEnabled === true && stick.lineId === lineIdToErase;
    });
    arraySticksToErase.push(stickToErase);
    return arraySticksToErase;
  } else if (
    //CASE 2: ONEs UNPAIRED, TWOs PAIRED, FOURs PAIRED.
    unpaired[0] === true &&
    unpaired[1] === false &&
    unpaired[2] === false
  ) {
    console.log("CASE 2: 1s unpaired, 2s and 4s OK");;
    const lineIdToErase = chooseRandomLine(receivedBoardSetting);

    const stickToErase = receivedBoardSetting.findIndex((stick) => {
      return stick.stickEnabled === true && stick.lineId === lineIdToErase;
    });

    arraySticksToErase.push(stickToErase);

    return arraySticksToErase;
  } else if (
    //CASE 3: ONEs PAIRED, TWOs UNPAIRED, FOURs PAIRED.
    unpaired[0] === false &&
    unpaired[1] === true &&
    unpaired[2] === false
  ) {
    //ERASE TWO 

  }  else if (
    //CASE 4: ONEs PAIRED, TWOs PAIRED, FOURs UNPAIRED.
    unpaired[0] === false &&
    unpaired[1] === false &&
    unpaired[2] === true
  ) {
    //ERASE FOUR

  }

*/


};

export default sticksToErase;
