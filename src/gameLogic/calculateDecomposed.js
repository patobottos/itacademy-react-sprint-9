const calculateDecomposed = (originalValues) => {
  const arrayDecomposedValues = [[], [], []];

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

  for (let i = 0; i <= 3; i++) {
    calculateGroups(originalValues[i]);
  }

  arrayDecomposedValues[0].push(groupOfOnes);
  arrayDecomposedValues[1].push(groupOfTwos);
  arrayDecomposedValues[2].push(groupOfFours);

  console.log('arrayDecomposedValues al final',arrayDecomposedValues);
  
  return arrayDecomposedValues;
  
};

export default calculateDecomposed;