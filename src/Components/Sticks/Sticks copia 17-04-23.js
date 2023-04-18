import yes from "../../assets/yes.png";
import no from "../../assets/no.png";
import { SticksContainer } from "./Sticks.styled";
import { useState } from "react";

const Yes = () => {
  return (
    <SticksContainer>
      <img alt="stick" src={yes} />
    </SticksContainer>
  );
};

const No = () => {
  return (
    <SticksContainer>
      <img alt="erased" src={no} />
    </SticksContainer>
  );
};


export const Stick = ({stickState, eraseStick}) => {
  const [erased, setErased] = useState(false);

  function handleClick() {
    setErased(true);
  }

  return <SticksContainer onClick={handleClick}>{erased ? <No /> : <Yes />}</SticksContainer>;
};
