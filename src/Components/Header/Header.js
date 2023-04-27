import { useState } from "react";
import { HeaderContainer, ButtonContainer, HeaderBtn } from "./Header.styled";
import Popup from "../Popup/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import newGame from "../../gameLogic/newGame";

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const StartNewGame = () => {
    console.log("Game started!");
    return <newGame />;
    console.log("Clicking and waiting deletion!");
  };

  const handleOnMouseEnter = () => {setPopupOpen(true)};
  const handleClick = () => {setPopupOpen(false)};

  return (
    <div>
      <HeaderContainer>
        <p className="title allowPopup" onMouseOver={handleOnMouseEnter}>NIM GAME</p>
        <ButtonContainer>
          <span>
            <FontAwesomeIcon className="icons" icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon className="icons" icon={faBars} />
          </span>
        </ButtonContainer>
        {popupOpen && (
          <Popup
            visible={popupOpen}
            setVisible={() => setPopupOpen(false)}
          ></Popup>
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
