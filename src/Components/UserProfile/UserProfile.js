import {
  UserProfileBackground,
  UserProfileOverlay,
  UserProfileContentBox,
  UserProfileText,
  UserProfileButton,
} from "./UserProfile.styled";
import { MyLink } from "../../styles/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useMyContext } from "../../application/Provider";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ visible, setVisible }) => {
  const [userState, setUserState] = useMyContext();
  const navigate = useNavigate();

  //LOGOUT
  const HandleLogout = () => {
    console.log("click to log out"); // OK!
    localStorage.clear();
    setUserState({});
    console.log("Successfully logged out!");
    console.log('user after logout=>',userState);
    navigate("/");
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
                <div onClick={HandleLogout}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faRightFromBracket}
                      />
                    </span>
                    LOGOUT
                  </a>
                </div>
              </li>
            </ul>
          </UserProfileText>
        </UserProfileContentBox>
      </UserProfileOverlay>
    </UserProfileBackground>
  );
};

export default UserProfile;
