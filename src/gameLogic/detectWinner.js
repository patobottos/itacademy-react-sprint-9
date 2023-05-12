import UpdateRanking from "../gameLogic/UpdateRanking";

const detectWinner = (receivedValues) => {
  //console.log('receivedValues en detectWinner', receivedValues);
  
  const sticksSum = receivedValues.reduce((accumulator, {stickValue}) => {
    return accumulator + stickValue;
  },0);
  //console.log('sticksSum', sticksSum);

  if (sticksSum === 1) {
    alert("Congratulations, you won!");
    UpdateRanking();

  } else {
    console.log("We don't have winners yet... Let's go on playing!");
    UpdateRanking();
  }
}

export default detectWinner;