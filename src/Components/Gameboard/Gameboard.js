import React, { useEffect, useState } from "react";
import { GameboardContainer, StickLine } from "./Gameboard.styled";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial from "../../gameLogic/allValuesInitial";
import eraseSticks from "../../gameMoves/eraseSticks";
import { ButtonContainer, PlayingBtn } from "../PlayingButtons/PlayingButtons.styled";
import detectWinner from "../../gameLogic/detectWinner";
import calculateSticksPerLine from "../../gameLogic/calculateSticksPerLine";
import sticksToErase from "../../gameLogic/sticksToErase";

const Gameboard = () => {
  const [allValues, setAllValues] = useState(allValuesInitial);
  const gameboardSetting = [...allValues];
  const [humanPlayer, setHumanPlayer] = useState(true);
  const [isFirstStep, setIsFirstStep] = useState(true);

  const [users, setUsers] = useState(null);
  

  // GAME LOGIC
  useEffect(() => {
    if (isFirstStep) {
      setIsFirstStep(false);
    } else {
      if (!humanPlayer) {
        const receivedValues = [...allValues];

        // 2. WE DETECT IF THE USER IS A WINNER
        detectWinner(receivedValues);

        // 3. CREATE ARRAY OF NUMBER OF STICKS IN EACH LINE
        const sticksPerLine = calculateSticksPerLine(receivedValues);
        console.log("sticksPerLine", sticksPerLine);

        // 4. COMPUTER CHOSES STICK OR STICKS TO ERASE
        const arraySticksToErase = sticksToErase(receivedValues);
        console.log("arraySticksToErase en ComputerTurn", arraySticksToErase);

        // 5. WE PAINT THE NEW KEYBOARD SETTING
        setAllValues(arraySticksToErase);

        // 6. COMPUTER PASS THE TURN TO HUMAN PLAYER
        setHumanPlayer(true);
      }
    }
  }, [humanPlayer]);

  // FUNCTION TO DELETE STICKS
  const eraseStick = (stickPosition) => {
    const resultErase = eraseSticks(stickPosition, gameboardSetting);
    //console.log("resultErase", resultErase);
    setAllValues(resultErase);
  };

  return (
    <GameboardContainer>
      <StickLine className="line1">
        <Stick
          stickValue={gameboardSetting[0].stickValue}
          eraseStick={() => eraseStick(0)}
        />
      </StickLine>
      <StickLine className="line3">
        <Stick
          stickValue={gameboardSetting[1].stickValue}
          eraseStick={() => eraseStick(1)}
        />
        <Stick
          stickValue={gameboardSetting[2].stickValue}
          eraseStick={() => eraseStick(2)}
        />
        <Stick
          stickValue={gameboardSetting[3].stickValue}
          eraseStick={() => eraseStick(3)}
        />
      </StickLine>
      <StickLine className="line5">
        <Stick
          stickValue={gameboardSetting[4].stickValue}
          eraseStick={() => eraseStick(4)}
        />
        <Stick
          stickValue={gameboardSetting[5].stickValue}
          eraseStick={() => eraseStick(5)}
        />
        <Stick
          stickValue={gameboardSetting[6].stickValue}
          eraseStick={() => eraseStick(6)}
        />
        <Stick
          stickValue={gameboardSetting[7].stickValue}
          eraseStick={() => eraseStick(7)}
        />
        <Stick
          stickValue={gameboardSetting[8].stickValue}
          eraseStick={() => eraseStick(8)}
        />
      </StickLine>
      <StickLine className="line7">
        <Stick
          stickValue={gameboardSetting[9].stickValue}
          eraseStick={() => eraseStick(9)}
        />
        <Stick
          stickValue={gameboardSetting[10].stickValue}
          eraseStick={() => eraseStick(10)}
        />
        <Stick
          stickValue={gameboardSetting[11].stickValue}
          eraseStick={() => eraseStick(11)}
        />
        <Stick
          stickValue={gameboardSetting[12].stickValue}
          eraseStick={() => eraseStick(12)}
        />
        <Stick
          stickValue={gameboardSetting[13].stickValue}
          eraseStick={() => eraseStick(13)}
        />
        <Stick
          stickValue={gameboardSetting[14].stickValue}
          eraseStick={() => eraseStick(14)}
        />
        <Stick
          stickValue={gameboardSetting[15].stickValue}
          eraseStick={() => eraseStick(15)}
        />
      </StickLine>

      <ButtonContainer>
        <PlayingBtn
          onClick={() => {
            console.log("ok, let's play a new game!");
            setAllValues(allValuesInitial);
            console.log("initialValues post click newgame", allValuesInitial);
          }}
        >
          NEW GAME
        </PlayingBtn>

        <PlayingBtn onClick={() => setHumanPlayer(false)}>
          COMPUTER TURN
        </PlayingBtn>
      </ButtonContainer>
    </GameboardContainer>
  );
};

export default Gameboard;
