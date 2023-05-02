import calculateSticksPerLine from "./calculateSticksPerLine";
import calculateDecomposed from "./calculateDecomposed";
import findUnpaired from "./findUnpaired";
import verifyAllPaired from "./verifyAllPaired";

const checkValidMove = (boardSettingInputToErase) => {
  const sticksPerLine = calculateSticksPerLine(boardSettingInputToErase);
  //console.log('sticksPerLine',sticksPerLine);
  
  const decomposed = calculateDecomposed(sticksPerLine);
  //console.log('decomposed',decomposed);
  
  const findUnpairedLines = findUnpaired(decomposed);
  //console.log("findUnpaired", findUnpairedLines);

  const checkIfValidMove = verifyAllPaired(findUnpairedLines);
  //console.log("checkIfValidMove ? ", checkIfValidMove);

  return checkIfValidMove;
}

export default checkValidMove;