import detectWinner from "./detectWinner";
import calculateDecomposed from "./calculateDecomposed";

function computerTurn(boardSetting) {
  // 1. WE DETECT IF THE USER IS A WINNER 
  detectWinner(boardSetting);

  const receivedBoardSetting = boardSetting.boardSetting;

  // 2. COMPUTER READS THE BOARD
  const firstLineSum = receivedBoardSetting[0];
  const secondLineSum = receivedBoardSetting[1] + receivedBoardSetting[2] + receivedBoardSetting[3];
  console.log('secondLineSum',secondLineSum);
  const thirdLineSum = receivedBoardSetting[4] + receivedBoardSetting[5] + receivedBoardSetting[6]+ receivedBoardSetting[7]+ receivedBoardSetting[8];

  const fourthLineSum = receivedBoardSetting[9]+ receivedBoardSetting[10]+ receivedBoardSetting[11]+ receivedBoardSetting[12]+ receivedBoardSetting[13]+ receivedBoardSetting[14]+ receivedBoardSetting[15];
  

  const resultantValues = [];
  resultantValues.push(firstLineSum, secondLineSum, thirdLineSum, fourthLineSum);
  console.log('resultantValues',resultantValues);

  const valuesAfterMove = calculateDecomposed(resultantValues);
  console.log('valuesAfterMove',valuesAfterMove);


  // 3. COMPUTER DETECTS IF IT WINS
  //detectWinner(newBoardSetting)




}

export default computerTurn;