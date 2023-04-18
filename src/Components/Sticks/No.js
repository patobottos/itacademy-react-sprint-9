import no from "../../assets/no.png";
import {SticksContainer} from './Sticks.styled';

const No = () => {
  return (
    <SticksContainer>
      <img alt="erased" src={no} />
    </SticksContainer>
  );
};

export default No;