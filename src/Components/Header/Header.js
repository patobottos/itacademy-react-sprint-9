import { useState } from "react";
import { HeaderContainer, ButtonContainer } from "./Header.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/Popup";
import Menu from "../Menu/Menu";
import UserProfile from "../UserProfile/UserProfile";

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  return (
    <div>
      <HeaderContainer>
          <p className="title allowPopup" onClick={() => setPopupOpen(true)}>
            NIM GAME
          </p>
          <ButtonContainer>
            <span>
              <FontAwesomeIcon 
              className="icons allowPopup" 
              icon={faBars} 
              onClick={() => setMenuOpen(true)}/>
            </span>
            <span>
              <FontAwesomeIcon 
              className="icons" 
              icon={faUser} 
              onClick={() => setUserProfileOpen(true)}
              />
            </span>
          </ButtonContainer>
          {popupOpen && (
            <Popup
              visible={popupOpen}
              setVisible={() => setPopupOpen(false)}
            ></Popup>
          )}
          {menuOpen && (
            <Menu
              visible={menuOpen}
              setVisible={() => setMenuOpen(false)}
            ></Menu>
          )}
          {userProfileOpen && (
            <UserProfile
              visible={userProfileOpen}
              setVisible={() => setUserProfileOpen(false)}
            ></UserProfile>
          )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
