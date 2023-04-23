import { ButtonContainer, PlayingBtn } from "./PlayingButtons.styled";
import computerTurn from "../../gameLogic/computerTurn";

const PlayingButtons = (newAllValues) => {
  return (
    <ButtonContainer>
      <PlayingBtn
        onClick={() => {
          console.log("ok, let's play a new game!");
        }}
      >
        NEW GAME
      </PlayingBtn>
      <PlayingBtn
        onClick={() => {
          computerTurn(newAllValues);
        }}
      >
        COMPUTER TURN
      </PlayingBtn>
    </ButtonContainer>
  );
};

export default PlayingButtons;
