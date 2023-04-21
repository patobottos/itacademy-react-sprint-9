import { HeaderContainer, ButtonContainer, HeaderBtn } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

import newGame from "../../gameLogic/newGame";

const Header = () => {
  const StartNewGame = () => {
    console.log("Game started!");
    return <newGame />;
    console.log("Clicking and waiting deletion!");
  };

  return (
    <HeaderContainer>
      <p className="title">NIM GAME</p>
      <ButtonContainer>
        <span>
          <FontAwesomeIcon className="icons" icon={faUser} />
        </span>
        <span>
          <FontAwesomeIcon className="icons" icon={faBars} />
        </span>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
