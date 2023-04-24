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
}

  findUnpaired();
  console.log('unpaired', unpaired);

  const arraySticksToErase = [];

  if (unpaired[0] === true && unpaired[1] === false && unpaired[2] === false) {
    console.log('adelante con la escogida al azar');
    const lineIdToErase = chooseRandomLine(receivedBoardSetting);

    const stickToErase = receivedBoardSetting.findIndex(stick => {
      return (stick.stickEnabled === true && stick.lineId === lineIdToErase);
    })

    arraySticksToErase.push(stickToErase)

    return arraySticksToErase;  
  }
};

export default sticksToErase;
