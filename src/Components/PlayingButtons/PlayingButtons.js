import {ButtonContainer, PlayingBtn} from './PlayingButtons.styled';
import detectWinner from '../../gameLogic/detectWinner';

const PlayingButtons = (boardSetting) => {

  return (
    <ButtonContainer>
      <PlayingBtn onClick={() => {detectWinner(boardSetting)}}>COMPUTER TURN</PlayingBtn>
    </ButtonContainer>
  )
}

export default PlayingButtons;