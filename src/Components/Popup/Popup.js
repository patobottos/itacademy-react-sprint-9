import MarienbadVideo from "../NimHistory/MarienbadVideo";
import NimHistory from "../NimHistory/NimHistory";
import {PopupBackground, PopupOverlay, PopupContentBox, PopupText, PopupButton, PopupVideoBox} from './Popup.styled';

const Popup = ({visible, setVisible}) => {

  return (
    <PopupBackground visible={visible}>
      <PopupOverlay onClick={() => setVisible(false)}> 
        <PopupContentBox>
          <PopupButton onClick={(e) => {
            e.stopPropagation();
            setVisible(false)}}>X</PopupButton>
          <PopupText>
            <NimHistory />
          </PopupText>
          <PopupVideoBox>
            <MarienbadVideo/>
          </PopupVideoBox>
        </PopupContentBox> 
      </PopupOverlay>
    </PopupBackground>
  );
};

export default Popup;
