import {
  MenuBackground,
  MenuOverlay,
  MenuContentBox,
  MenuText,
  MenuButton,
} from "./Menu.styled";
import { MyLink } from "../../styles/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRankingStar,
  faBook,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ visible, setVisible }) => {
  return (
    <MenuBackground visible={visible}>
      <MenuOverlay onClick={() => setVisible(false)}>
        <MenuContentBox>
          <MenuButton
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
          >
            X
          </MenuButton>
          <MenuText>
            <div>
              <ul>
                <li className="ranking listTop">
                  <a>
                    <span>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faRankingStar}
                        onClick={() => console.log("click log in!")}
                      />
                    </span>
                    RANKING
                  </a>
                </li>
                <li className="nimHistory">
                  <MyLink to="/history/">
                    <a>
                      <span>
                        <FontAwesomeIcon
                          className="icons"
                          icon={faBook}
                          onClick={() => console.log("click history!")}
                        />
                      </span>
                      NIM HISTORY
                    </a>
                  </MyLink>
                </li>

                <li className="externalLinks">
                  <MyLink
                    to="/external-links/"
                  >
                    <a>
                      <span>
                        <FontAwesomeIcon
                          className="icons"
                          icon={faAnchor}
                          onClick={() => console.log("click log in!")}
                        />
                      </span>
                      OTHER LINKS
                    </a>
                  </MyLink>
                </li>
              </ul>
            </div>
          </MenuText>
        </MenuContentBox>
      </MenuOverlay>
    </MenuBackground>
  );
};

export default Menu;
