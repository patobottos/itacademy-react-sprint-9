import chooseRandomLine from "./chooseRandomLine";

const sticksToErase = (decomposedValues, receivedBoardSetting) => {
  //console.log('decomposedValues inicio rowToErase',decomposedValues);

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

  const arraySticksToErase = [];

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
};

export default sticksToErase;
