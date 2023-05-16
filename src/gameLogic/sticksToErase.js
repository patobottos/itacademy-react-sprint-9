import turnValueToZero from "./turnValueToZero";
import checkValidMove from "./checkValidMove";
import nothingToBeDone from "./nothingToBeDone";

const sticksToErase = (receivedValues) => {

  const boardSettingInputToErase = [...receivedValues];
  let arraySticksToErase = [];

  // WE FILTER ONLY VALID STICKS STILL PLAYING
  const enabledSticks = boardSettingInputToErase.filter(
    (validSticks) => validSticks.stickValue !== 0
  );

  // WE ERASE STICKS AND SEE IF WE HAVE A WINNING POSITION
  // SO, WE CREATE 4 ARRAYS WITH STICKS TO TRY WITH
  const sticksToTryLineOne = enabledSticks.filter((item) => item.lineId === 1);
  const sticksToTryLineThree = enabledSticks.filter((item) => item.lineId === 3);
  const sticksToTryLineFive = enabledSticks.filter((item) => item.lineId === 5);
  const sticksToTryLineSeven = enabledSticks.filter((item) => item.lineId === 7);
  // console.log("sticksToTryLineOne", sticksToTryLineOne);
  // console.log("sticksToTryLineThree", sticksToTryLineThree);
  // console.log("sticksToTryLineFive", sticksToTryLineFive);
  // console.log("sticksToTryLineSeven", sticksToTryLineSeven);

  const firstBoardSettingInputToErase = [...boardSettingInputToErase];
  const secondBoardSettingInputToErase = [...boardSettingInputToErase];
  const thirdBoardSettingInputToErase = [...boardSettingInputToErase];
  const fourthBoardSettingInputToErase = [...boardSettingInputToErase];

  // WE FIND A NIMSUM = 0 SOLUTION DELETING STICKS
  // WE BEGIN WITH STICK IN LINE 1
  if (sticksToTryLineOne.length > 0) {

    //console.log("Testing with line 1...");
    const modifiedStick = turnValueToZero(sticksToTryLineOne);
    //console.log('modifiedStick',modifiedStick); // ==> OK!

    firstBoardSettingInputToErase[modifiedStick.stickId - 1] = modifiedStick;
    //console.log("firstBoardSettingInputToErase", firstBoardSettingInputToErase);

    const checkIfValidMove = checkValidMove(firstBoardSettingInputToErase);
    //console.log("checkIfValidMove in Line1", checkIfValidMove);

    if (checkIfValidMove === true) {
      console.log("We have a winning move!=> ", firstBoardSettingInputToErase);
      arraySticksToErase = [...firstBoardSettingInputToErase];
    } else {
      //console.log("No valid moves in line 1...");
    }
  }

  // WE FOLLOW WITH STICKS IN LINE 3
  if (arraySticksToErase.length < 1 && sticksToTryLineThree.length > 0) {
    //console.log("Testing with line 3...");

    for (let i = sticksToTryLineThree.length - 1; i >= 0; i--) {
      const modifiedStick = turnValueToZero(sticksToTryLineThree);
      //console.log('modifiedStick',modifiedStick);

      secondBoardSettingInputToErase[modifiedStick.stickId - 1] = modifiedStick;
      //console.log("secondBoardSettingInputToErase",secondBoardSettingInputToErase);

      const checkIfValidMove = checkValidMove(secondBoardSettingInputToErase);
     //console.log("checkIfValidMove in Line3", checkIfValidMove);

      if (checkIfValidMove) {
        console.log("We have a winning move!=> ",secondBoardSettingInputToErase);
        arraySticksToErase = [...secondBoardSettingInputToErase];
        break;
      } else {
        sticksToTryLineThree.pop();
        //console.log("deleting last stick");
        //console.log("sticksToTryLineThree", sticksToTryLineThree);
      }
    }
  }

  // WE FOLLOW WITH STICKS IN LINE 5
  if (arraySticksToErase.length < 1 && sticksToTryLineFive.length > 0) {
    //console.log("No valid moves in line 3");
    //console.log("Testing with line 5...");

    for (let i = sticksToTryLineFive.length - 1; i >= 0; i--) {
      const modifiedStick = turnValueToZero(sticksToTryLineFive);
      //console.log('modifiedStick',modifiedStick);

      thirdBoardSettingInputToErase[modifiedStick.stickId - 1] = modifiedStick;

      const checkIfValidMove = checkValidMove(thirdBoardSettingInputToErase);
      //console.log("checkIfValidMove in Line5", checkIfValidMove);

      if (checkIfValidMove) {
        console.log("We have a winning move!=> ",thirdBoardSettingInputToErase);
        arraySticksToErase = [...thirdBoardSettingInputToErase];
        break;
      } else {
        sticksToTryLineFive.pop();
        //console.log("deleting last stick");
        //console.log("sticksToTryLineFive", sticksToTryLineFive);
      }
    }
  }

  // WE FOLLOW WITH STICKS IN LINE 7
  if (arraySticksToErase.length < 1 && sticksToTryLineSeven.length > 0) {
    //console.log("No valid moves in line 5");
    //console.log("Testing with line 7...");

    for (let i = sticksToTryLineSeven.length - 1; i >= 0; i--) {
      const modifiedStick = turnValueToZero(sticksToTryLineSeven);
      //console.log('modifiedStick',modifiedStick);

      fourthBoardSettingInputToErase[modifiedStick.stickId - 1] = modifiedStick;
      //console.log("fourthBoardSettingInputToErase",fourthBoardSettingInputToErase);

      const checkIfValidMove = checkValidMove(fourthBoardSettingInputToErase);
      //console.log("checkIfValidMove in Line7", checkIfValidMove);

      if (checkIfValidMove) {
        //console.log("eureka!");
        arraySticksToErase = [...fourthBoardSettingInputToErase];
        break;
      } else {
        sticksToTryLineSeven.pop();
        //console.log("deleting last stick");
        //console.log("sticksToTryLineThree", sticksToTryLineSeven);
      }
    }
  }

  if (arraySticksToErase.length > 0) {
    //console.log("arraySticksToErase DEF", arraySticksToErase);
    return arraySticksToErase;
  } else {
    console.log("Nothing to be done, just pick a random stick");
    arraySticksToErase = nothingToBeDone(boardSettingInputToErase);
    //console.log("arraySticksToErase DEF", arraySticksToErase);
    return arraySticksToErase;
  }
};

export default sticksToErase;