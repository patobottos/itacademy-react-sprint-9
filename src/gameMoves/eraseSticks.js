const eraseSticks = (stickPosition, allValues) => {
  //console.log('stickPosition at erase',stickPosition);
  //console.log('allValues at erase',allValues);
  //console.log('nextValues at erase',nextValues);

  if (allValues[stickPosition].stickValue === 0) {
    alert("You are picking a stick already erased. Pick a valid one, please.");
    return allValues;
  } else {
    if (allValues[stickPosition].lineEnabled === false) {
      alert("In each move, you can remove any number of matches but only from one row.");
      return allValues;
    } else {
      const modifiedStick = {
        ...allValues[stickPosition],
        stickValue: 0,
        stickEnabled: false,
      }
      const newValues = [...allValues];
      newValues[stickPosition]=modifiedStick;
      return newValues;
    }
  }
};

export default eraseSticks;
