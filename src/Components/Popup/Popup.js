import {PopupBackground, PopupOverlay, PopupContentBox, PopupText, PopupButton, } from './Popup.styled';
import GameRules from "../../pages/GameRules/GameRules";

const Popup = ({visible, setVisible}) => {

  return (
    <PopupBackground visible={visible}>
      <PopupOverlay onClick={() => setVisible(false)}> 
        <PopupContentBox>
          <PopupButton onClick={(e) => {
            e.stopPropagation();
            setVisible(false)}}>X</PopupButton>
          <PopupText>
            <GameRules />
          </PopupText>
        </PopupContentBox> 
      </PopupOverlay>
    </PopupBackground>
  );
};

export default Popup;
