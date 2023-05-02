const chooseRandomStick = (receivedBoardSetting) => {
  const enabledSticks = receivedBoardSetting.filter(
    (validSticks) => validSticks.stickValue !== 0
  );
  //console.log("enabledSticks", enabledSticks);

  const availableLines = enabledSticks
    .map((item) => item.lineId)
    .filter(
      (value, index, currentValue) => currentValue.indexOf(value) === index
    );
  //console.log("availableLines", availableLines);

  const randomIndex = Math.floor(Math.random() * availableLines.length);
  const selectedLine = availableLines[randomIndex];

  const allSticksInSelectedLine = enabledSticks.filter(
    (item) => item.lineId === selectedLine);
  //console.log("allSticksInSelectedLine", allSticksInSelectedLine);

  const randomStick = allSticksInSelectedLine[allSticksInSelectedLine.length-1];

  return randomStick;
};

export default chooseRandomStick;
