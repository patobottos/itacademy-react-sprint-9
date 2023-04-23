const chooseRandomLine = (receivedBoardSetting) => {
  const enabledSticks = receivedBoardSetting.filter((stick) => {
    return stick.stickEnabled === true;
  });

  const randomIndex = Math.floor(Math.random() * enabledSticks.length);

  const selectedLine = enabledSticks[randomIndex].lineId;

  return selectedLine;
};

export default chooseRandomLine;
