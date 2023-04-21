import React, { useEffect, useState } from "react";
import { GameboardStyled } from "./Gameboard.styled";
import PlayingButtons from "../PlayingButtons/PlayingButtons";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial, { allValuesInitial2 } from "../../gameLogic/allValuesInitial";

const Gameboard = () => {

  const [allValues, setAllvalues] = useState(allValuesInitial);

  // PABLO SUGIERE AQUÍ CREAR STATE COMO ARRAY DE OBJETOS, POR LINEAS

  const nextValues = [...allValues];

  useEffect(() => {
    const initialValues = [...allValues];
    console.log("allValues post borrado useEf", allValues);
    console.log("nextValues post borrado useEf", nextValues);

  }, [allValues]);

  const eraseStick = (stick) => {
    console.log("stick position", stick);
    if (allValues[stick] === 1) {
      const newValues = [...allValues];
      //console.log('newValues antes del cambio',newValues);
      newValues[stick] = 0;
      //console.log('newValues luego del cambio',newValues);
      setAllvalues(newValues);
      //console.log("allValues luego de borrado", allValues);
    } else {
      setAllvalues([...allValues]);
      console.log("allValues post en eraseStick", allValues);
    }
  };

  return (
    <GameboardStyled>
      <div className="line1">
        <Stick stickValue={allValues[0]} eraseStick={() => eraseStick(0)} />
      </div>

      <div className="line3">
        <Stick stickValue={allValues[1]} eraseStick={() => eraseStick(1)} />
        <Stick stickValue={allValues[2]} eraseStick={() => eraseStick(2)} />
        <Stick stickValue={allValues[3]} eraseStick={() => eraseStick(3)} />
      </div>
      <div className="line5">
        <Stick stickValue={allValues[4]} eraseStick={() => eraseStick(4)} />
        <Stick stickValue={allValues[5]} eraseStick={() => eraseStick(5)} />
        <Stick stickValue={allValues[6]} eraseStick={() => eraseStick(6)} />
        <Stick stickValue={allValues[7]} eraseStick={() => eraseStick(7)} />
        <Stick stickValue={allValues[8]} eraseStick={() => eraseStick(8)} />
      </div>
      <div className="line7">
        <Stick stickValue={allValues[9]} eraseStick={() => eraseStick(9)} />
        <Stick stickValue={allValues[10]} eraseStick={() => eraseStick(10)} />
        <Stick stickValue={allValues[11]} eraseStick={() => eraseStick(11)} />
        <Stick stickValue={allValues[12]} eraseStick={() => eraseStick(12)} />
        <Stick stickValue={allValues[13]} eraseStick={() => eraseStick(13)} />
        <Stick stickValue={allValues[14]} eraseStick={() => eraseStick(14)} />
        <Stick stickValue={allValues[15]} eraseStick={() => eraseStick(15)} />
      </div>

      <PlayingButtons boardSetting={nextValues} />
    </GameboardStyled>
  );
};

export default Gameboard;
