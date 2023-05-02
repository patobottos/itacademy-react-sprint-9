import chooseRandomStick from './chooseRandomStick';

const nothingToBeDone = (boardSettingInputToErase) => {
  const randomStick = chooseRandomStick(boardSettingInputToErase);
  //console.log('randomStick',randomStick);
  
  const modifiedStick = {
    ...randomStick,
    stickValue: 0,
    stickEnabled: false,
  }

  boardSettingInputToErase[modifiedStick.stickId - 1] = modifiedStick;
  //console.log('boardSettingInputToErase',boardSettingInputToErase);
  
  const arraySticksToErase = [...boardSettingInputToErase];
  
  return arraySticksToErase;
};

export default nothingToBeDone;