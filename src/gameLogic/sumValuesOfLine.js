const sumValuesOfLine = (receivedBoardSetting, line) => {
  // SELECT LINE
  const filteredByLine = receivedBoardSetting.filter((stick) => {
    return stick.lineId === line;
  });

  // CALCULATE VALUES
  const result = filteredByLine.reduce((accumulator, { stickValue }) => {
    return accumulator + stickValue;
  }, 0);
  return result;
};

export default sumValuesOfLine;
