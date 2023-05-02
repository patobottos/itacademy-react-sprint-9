import sumValuesOfLine from "./sumValuesOfLine";

const calculateSticksPerLine = (receivedValues) => {
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
  //console.log("Sticks per line", sticksPerLine);

  return sticksPerLine;
}

export default calculateSticksPerLine;