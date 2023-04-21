import { ButtonContainer, PlayingBtn } from "./PlayingButtons.styled";
import computerTurn from "../../gameLogic/computerTurn";

const PlayingButtons = (boardSetting) => {
  return (
    <ButtonContainer>
      <PlayingBtn
        onClick={() => {
          computerTurn(boardSetting);
        }}
      >
        NEW GAME
      </PlayingBtn>
      <PlayingBtn
        onClick={() => {
          computerTurn(boardSetting);
        }}
      >
        COMPUTER TURN
      </PlayingBtn>
    </ButtonContainer>
  );
};

export default PlayingButtons;
