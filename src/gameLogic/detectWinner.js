const detectWinner = (receivedValues) => {
  //console.log('receivedValues en detectWinner', receivedValues);

  const sticksSum = receivedValues.reduce((accumulator, {stickValue}) => {
    return accumulator + stickValue;
  },0);
  //console.log('sticksSum', sticksSum);

  if (sticksSum === 1) {
    alert('We have a winner!');
  } else {
    console.log("We don't have winners yet... Let's go on playing!");
  }
}

export default detectWinner;