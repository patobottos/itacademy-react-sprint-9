// DEPRECATED AS FOR MAY 14th 2023


import UpdateRanking from "../gameLogic/UpdateRanking";

const detectWinner = (receivedValues) => {
  //console.log('receivedValues en detectWinner', receivedValues);
  
  const sticksSum = receivedValues.reduce((accumulator, {stickValue}) => {
    return accumulator + stickValue;
  },0);
  //console.log('sticksSum', sticksSum);

  if (sticksSum === 1) {
    alert("Congratulations, you won!");
    const winner = "human";
    UpdateRanking(winner);

  } else {
    console.log("We don't have winners yet... Let's go on playing!");
  }
}

export default detectWinner;