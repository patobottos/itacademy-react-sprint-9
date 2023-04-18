import yes from "../../assets/yes.png";
import {SticksContainer} from './Sticks.styled';

const Yes = () => {
  return (
    <SticksContainer>
      <img alt="stick" src={yes} />
    </SticksContainer>
  );
};

export default Yes;