import React, { useEffect, useState } from "react";
import { GameboardStyled } from "./Gameboard.styled";
import PlayingButtons from "../PlayingButtons/PlayingButtons";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial from "../../gameLogic/allValuesInitial";

const Gameboard = () => {
  const [allValues, setAllvalues] = useState(allValuesInitial);
  const nextValues = [...allValues];

  useEffect(() => {
    const initialValues = [...allValues];
    //console.log("allValues post borrado useEf", allValues);
    //console.log("nextValues post borrado useEf", nextValues);
  }, [allValues]);

  const eraseStick = (stickPosition) => {
    if (allValues[stickPosition].stickValue === 1) {
      const newValues = [...allValues];
      //console.log('newValues antes del cambio',newValues);
      newValues[stickPosition].stickValue = 0;
      newValues[stickPosition].stickEnabled = false;
      //console.log('newValues luego del cambio',newValues);
      setAllvalues(newValues);
      console.log("allValues post eraseStick", allValues);
    } else {
      setAllvalues([...allValues]);
      console.log("allValues post eraseStick", allValues);
    }
  };

  return (
    <GameboardStyled>
      <div className="line1">
        <Stick stickValue={allValues[0].stickValue} eraseStick={() => eraseStick(0)} />
      </div>
      <div className="line3">
        <Stick stickValue={allValues[1].stickValue} eraseStick={() => eraseStick(1)} />
        <Stick stickValue={allValues[2].stickValue} eraseStick={() => eraseStick(2)} />
        <Stick stickValue={allValues[3].stickValue} eraseStick={() => eraseStick(3)} />
      </div>
      <div className="line5">
        <Stick stickValue={allValues[4].stickValue} eraseStick={() => eraseStick(4)} />
        <Stick stickValue={allValues[5].stickValue} eraseStick={() => eraseStick(5)} />
        <Stick stickValue={allValues[6].stickValue} eraseStick={() => eraseStick(6)} />
        <Stick stickValue={allValues[7].stickValue} eraseStick={() => eraseStick(7)} />
        <Stick stickValue={allValues[8].stickValue} eraseStick={() => eraseStick(8)} />
      </div>
      <div className="line7">
        <Stick stickValue={allValues[9].stickValue} eraseStick={() => eraseStick(9)} />
        <Stick stickValue={allValues[10].stickValue} eraseStick={() => eraseStick(10)} />
        <Stick stickValue={allValues[11].stickValue} eraseStick={() => eraseStick(11)} />
        <Stick stickValue={allValues[12].stickValue} eraseStick={() => eraseStick(12)} />
        <Stick stickValue={allValues[13].stickValue} eraseStick={() => eraseStick(13)} />
        <Stick stickValue={allValues[14].stickValue} eraseStick={() => eraseStick(14)} />
        <Stick stickValue={allValues[15].stickValue} eraseStick={() => eraseStick(15)} />
      </div>

      <PlayingButtons props={allValues} />
    </GameboardStyled>
  );
};

export default Gameboard;
