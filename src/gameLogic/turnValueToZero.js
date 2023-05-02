const turnValueToZero = (arraySticksToTry) => {
  const index = arraySticksToTry.length - 1;
  //const lastElement = arraySticksToTry.slice(-1);
  //console.log('lastElement',lastElement);
  //console.log('index',index);

  const modifiedStick = { 
    ...arraySticksToTry[index],
    stickValue: 0,
    stickEnabled: false,
  };

  return modifiedStick;
};

export default turnValueToZero;
