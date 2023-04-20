const calculateDecomposed = (originalValues) => {

  console.log('resultantArray al llegar a calculateDecomposed',originalValues);
  
  const arrayDecomposedValues = [[], [], []];
  // console.log('arrayDecomposedValues al inicio',arrayDecomposedValues);

  const groupOfFours = [];
  const groupOfTwos = [];
  const groupOfOnes = [];


  function calculateGroups(fileValue) {
    const numberOfFours = Math.trunc(fileValue / 4);
    const remainderFour = fileValue % 4;
    groupOfFours.push(numberOfFours);

    const numberOfTwos = Math.trunc(remainderFour / 2);
    const remainderTwo = remainderFour % 2;
    groupOfTwos.push(numberOfTwos);

    const numberOfOnes = remainderTwo;
    groupOfOnes.push(numberOfOnes);
  }

  function calculateAllLines(originalValues) {
    calculateGroups(originalValues[0]);
    calculateGroups(originalValues[1]);
    calculateGroups(originalValues[2]);
    calculateGroups(originalValues[3]);
  }

  function composeNewArrayOfValues(originalValues) {
    calculateAllLines(originalValues);
    arrayDecomposedValues[0].push(groupOfOnes);
    arrayDecomposedValues[1].push(groupOfTwos);
    arrayDecomposedValues[2].push(groupOfFours);
  }

  return arrayDecomposedValues;
  // console.log('arrayDecomposedValues al final',arrayDecomposedValues);

};

export default calculateDecomposed;
