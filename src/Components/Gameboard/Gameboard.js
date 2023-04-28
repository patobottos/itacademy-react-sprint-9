import React, { useEffect, useState } from "react";
import { GameboardStyled, StickLine } from "./Gameboard.styled";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial from "../../gameLogic/allValuesInitial";
import eraseSticks from "../../gameMoves/eraseSticks";
import {
  ButtonContainer,
  PlayingBtn,
} from "../PlayingButtons/PlayingButtons.styled";
import computerTurn from "../../gameLogic/computerTurn";

//const initialValues = allValuesInitial;

const Gameboard = () => {
  const [allValues, setAllValues] = useState(
    allValuesInitial.map((obj) => obj)
  );
  const nextValues = [...allValues];

  const [humanPlayer, setHumanPlayer] = useState(true);
  //console.log('player al inicio. human?',humanPlayer);

  useEffect(() => {
    //console.log("allValues post borrado useEf", allValues);
    //console.log("nextValues post borrado useEf", nextValues);
  }, [allValues]);

  const eraseStick = (stickPosition) => {
    const resultErase = eraseSticks(stickPosition, allValues, nextValues);
    console.log("resultErase", resultErase);
    setAllValues(resultErase);
  };

  return (
    <GameboardStyled>
      <StickLine className="line1">
        <Stick
          stickValue={allValues[0].stickValue}
          eraseStick={() => eraseStick(0)}
        />
      </StickLine>
      <StickLine className="line3">
        <Stick
          stickValue={allValues[1].stickValue}
          eraseStick={() => eraseStick(1)}
        />
        <Stick
          stickValue={allValues[2].stickValue}
          eraseStick={() => eraseStick(2)}
        />
        <Stick
          stickValue={allValues[3].stickValue}
          eraseStick={() => eraseStick(3)}
        />
      </StickLine>
      <StickLine className="line5">
        <Stick
          stickValue={allValues[4].stickValue}
          eraseStick={() => eraseStick(4)}
        />
        <Stick
          stickValue={allValues[5].stickValue}
          eraseStick={() => eraseStick(5)}
        />
        <Stick
          stickValue={allValues[6].stickValue}
          eraseStick={() => eraseStick(6)}
        />
        <Stick
          stickValue={allValues[7].stickValue}
          eraseStick={() => eraseStick(7)}
        />
        <Stick
          stickValue={allValues[8].stickValue}
          eraseStick={() => eraseStick(8)}
        />
      </StickLine>
      <StickLine className="line7">
        <Stick
          stickValue={allValues[9].stickValue}
          eraseStick={() => eraseStick(9)}
        />
        <Stick
          stickValue={allValues[10].stickValue}
          eraseStick={() => eraseStick(10)}
        />
        <Stick
          stickValue={allValues[11].stickValue}
          eraseStick={() => eraseStick(11)}
        />
        <Stick
          stickValue={allValues[12].stickValue}
          eraseStick={() => eraseStick(12)}
        />
        <Stick
          stickValue={allValues[13].stickValue}
          eraseStick={() => eraseStick(13)}
        />
        <Stick
          stickValue={allValues[14].stickValue}
          eraseStick={() => eraseStick(14)}
        />
        <Stick
          stickValue={allValues[15].stickValue}
          eraseStick={() => eraseStick(15)}
        />
      </StickLine>

      <ButtonContainer>
        <PlayingBtn
          onClick={() => {
            console.log("ok, let's play a new game!");
            console.log("initialValues en click newgame", allValuesInitial);
            // NO FUNCIONA! Me carga los valores cambiados, no los originales =(
            setAllValues(allValuesInitial);
            console.log("initialValues post click newgame", allValuesInitial);
          }}
        >
          NEW GAME
        </PlayingBtn>

        <PlayingBtn
          onClick={() => {
            //setPlayer("computer"); NO FUNCIONA!
            setAllValues(computerTurn(allValues));
          }}
        >
          COMPUTER TURN
        </PlayingBtn>
      </ButtonContainer>
    </GameboardStyled>
  );
};

export default Gameboard;
