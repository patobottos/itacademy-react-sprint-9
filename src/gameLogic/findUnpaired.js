const findUnpaired = (decomposedValues) => {
  // SUM VALUES OF STICKS PER LINE
  const sumLine = (arr) => {
    return arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  };

  const onesSum = sumLine(sumLine(decomposedValues[0]));
  const twosSum = sumLine(sumLine(decomposedValues[1]));
  const foursSum = sumLine(sumLine(decomposedValues[2]));

  const onesTwosFours = [];
  onesTwosFours.push(onesSum, twosSum, foursSum);
  //console.log("onesTwosFours", onesTwosFours);

  const unpaired = onesTwosFours.map((number) => {
    return number % 2 !== 0;
  });

  return unpaired;
};

export default findUnpaired;