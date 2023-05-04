import {
  UserProfileBackground,
  UserProfileOverlay,
  UserProfileContentBox,
  UserProfileText,
  UserProfileButton,
} from "./UserProfile.styled";
import { MyLink } from "../../styles/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const UserProfile = ({ visible, setVisible }) => {
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
                      <FontAwesomeIcon
                        className="icons"
                        icon={faPenNib}
                        onClick={() => console.log("click sign up!")}
                      />
                    </span>
                    SIGN UP
                  </a>
                </MyLink>
              </li>
              <li>
                <MyLink to="/login/">
                  <a>
                    <span>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faUser}
                        onClick={() => console.log("click log in!")}
                      />
                    </span>
                    LOG IN
                  </a>
                </MyLink>
              </li>
              <li>
                <a>
                  <span>
                    <FontAwesomeIcon
                      className="icons"
                      icon={faRightFromBracket}
                      onClick={() => console.log("click log out!")}
                    />
                  </span>
                  LOGOUT
                </a>
              </li>
            </ul>
          </UserProfileText>
        </UserProfileContentBox>
      </UserProfileOverlay>
    </UserProfileBackground>
  );
};

export default UserProfile;
