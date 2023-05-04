import { useState } from "react";
import { HeaderContainer, ButtonContainer } from "./Header.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Popup from "../Popup/Popup";
import Menu from "../Menu/Menu";
import UserProfile from "../UserProfile/UserProfile";

const Header = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);

  return (
    <HeaderContainer>
      <p className="title allowPopup" onClick={() => setPopupOpen(true)}>
        NIM GAME
      </p>

      <ButtonContainer>
        <nav>
          <div className="home">
            <Link to="/">
              <span>
                <FontAwesomeIcon className="icons" icon={faHouse} />
              </span>
            </Link>
          </div>

          <div className="menu">
            <span>
              <FontAwesomeIcon
                className="icons allowPopup"
                icon={faBars}
                onClick={() => setMenuOpen(true)}
              />
            </span>
          </div>

          <div className="user">
            <span>
              <FontAwesomeIcon
                className="icons"
                icon={faUser}
                onClick={() => setUserProfileOpen(true)}
              />
            </span>
          </div>
        </nav>
      </ButtonContainer>

      {popupOpen && (
        <Popup
          visible={popupOpen}
          setVisible={() => setPopupOpen(false)}
        ></Popup>
      )}
      {menuOpen && (
        <Menu visible={menuOpen} setVisible={() => setMenuOpen(false)}></Menu>
      )}
      {userProfileOpen && (
        <UserProfile
          visible={userProfileOpen}
          setVisible={() => setUserProfileOpen(false)}
        ></UserProfile>
      )}
    </HeaderContainer>
  );
};

export default Header;
