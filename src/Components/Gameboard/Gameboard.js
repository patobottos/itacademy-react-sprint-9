import React, { useEffect, useState } from "react";
import {
  GameboardContainer,
  StickLine,
  TextGridContainer,
  TextMainContainer,
} from "./Gameboard.styled";
import { Stick } from "../Sticks/Sticks";
import allValuesInitial from "../../gameLogic/allValuesInitial";
import eraseSticks from "../../gameMoves/eraseSticks";
import {
  ButtonContainer,
  PlayingBtn,
} from "../PlayingButtons/PlayingButtons.styled";
import detectWinner from "../../gameLogic/detectWinner";
import calculateSticksPerLine from "../../gameLogic/calculateSticksPerLine";
import sticksToErase from "../../gameLogic/sticksToErase";
import { useMyContext } from "../../application/Provider";
import UpdateRanking from "../../gameLogic/UpdateRanking";
import {updateUser} from '../../application/api';

const Gameboard = () => {
  const [userState, setUserState] = useMyContext();
  const [allValues, setAllValues] = useState(allValuesInitial);
  const gameboardSetting = [...allValues];
  const [humanPlayer, setHumanPlayer] = useState(true);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [winner, setWinner] = useState("");

  const userData = { ...userState };
  //console.log('userData',userData);
  const loggedIn = userData.loggedIn;
  //console.log('logged in? ',loggedIn);

 //WE SET USER DATA TO DISPLAY - STATE TO SAVE THE OBJECT
  const [userInfo, setUserInfo] = useState({
    index: "",
    currentPlayer: "",
    playerMatches: "",
    playerVictories: "",
    allData: "",
  });

  //WE SET USER DATA TO DISPLAY
  useEffect(() => {
    if (loggedIn) {
      const index = userData.userIndex;
      //console.log("index", index);
      const currentPlayer = userData.persons[index].username;
      const playerMatches = userData.persons[index].totalMatches;
      const playerVictories = userData.persons[index].totalVictories;
      const allPlayerData = {...userData.persons[index]};
      const playerId = allPlayerData.id;
      console.log('all data =>',allPlayerData);

      setUserInfo({
        ...userInfo,
        index: index,
        currentPlayer: currentPlayer,
        playerMatches: playerMatches,
        playerVictories: playerVictories,
        allData: allPlayerData,
      });

      if (winner == "computer") {
        let newTotalMatches = playerMatches + 1;

        const playerUpdatedData = {
          ...userInfo.allData,
          totalGames: newTotalMatches,
        };

        updateUser(playerId, playerUpdatedData);
      }
    }   
    
  }, [winner]);

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

        // 6. WE CHECK IF COMPUTER WINS
        const sticksSum = arraySticksToErase.reduce(
          (accumulator, { stickValue }) => {
            return accumulator + stickValue;
          },0);
        console.log("palitos compu al final de su movida", sticksSum);

        if (sticksSum === 1) {
          alert("Computer wins!");

          // 7. UPDATE RANKING
          // SETWINNER TRIGGERS UPDATE RANKING INSIDE USE EFFECT
          setWinner("computer");
          
          const dataToUpdate = UpdateRanking(winner);
          console.log('dataToUpdate');

        } else {
          // 8. COMPUTER PASS THE TURN TO HUMAN PLAYER
          setHumanPlayer(true);
        }
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
      {!loggedIn ? (
        ""
      ) : (
        <TextMainContainer>
          <TextGridContainer>
            <p>
              User name:<span>{userInfo.currentPlayer}</span>
            </p>
            <p>
              Total matches:<span>{userInfo.playerMatches}</span>
            </p>
            <p>
              Total victories:<span>{userInfo.playerVictories}</span>
            </p>
          </TextGridContainer>
        </TextMainContainer>
      )}
    </GameboardContainer>
  );
};

export default Gameboard;
