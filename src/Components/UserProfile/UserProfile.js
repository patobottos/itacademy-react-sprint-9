import {
  UserProfileBackground,
  UserProfileOverlay,
  UserProfileContentBox,
  UserProfileText,
  UserProfileButton,
} from "./UserProfile.styled";
import { MyLink } from "../../styles/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUser, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { HandleLogout } from "../Logout/HandleLogout";

const UserProfile = ({ visible, setVisible }) => {
  const handleClickLogout = () => {
    console.log("click to log out");
    HandleLogout();
  };

  return (
    <UserProfileBackground visible={visible}>
      <UserProfileOverlay onClick={() => setVisible(false)}>
        <UserProfileContentBox>
          <UserProfileButton
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
          >
            X
          </UserProfileButton>
          <UserProfileText>
            <ul>
              <li className="listTop">
                <MyLink to="/signup/">
                  <a>
                    <span>
                      <FontAwesomeIcon className="icons" icon={faPenNib} />
                    </span>
                    SIGN UP
                  </a>
                </MyLink>
              </li>
              <li>
                <MyLink to="/login/">
                  <a>
                    <span>
                      <FontAwesomeIcon className="icons" icon={faUser} />
                    </span>
                    LOG IN
                  </a>
                </MyLink>
              </li>
              <li>
                <MyLink to="/" onClick={() => handleClickLogout()}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faRightFromBracket}
                      />
                    </span>
                    LOGOUT
                  </a>
                </MyLink>
              </li>
            </ul>
          </UserProfileText>
        </UserProfileContentBox>
      </UserProfileOverlay>
    </UserProfileBackground>
  );
};

export default UserProfile;
