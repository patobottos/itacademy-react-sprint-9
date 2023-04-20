const detectWinner = (boardSetting) => {

  console.log('boardSetting', boardSetting);

  const receivedBoardSetting = boardSetting.boardSetting;

  const sticksSum = receivedBoardSetting.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log('sticksSum', sticksSum);

  if (sticksSum === 1) {
    console.log('We have a winner!');
  }

}

export default detectWinner;