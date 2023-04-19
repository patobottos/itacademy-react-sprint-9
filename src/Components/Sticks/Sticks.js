import { SticksContainer } from "./Sticks.styled";
//import { useState } from "react";
import Yes from "./Yes";
import No from "./No";

export const Stick = ({stickValue, eraseStick}) => {
  return <SticksContainer onClick={eraseStick}>{ stickValue === 1 ? <Yes /> : <No />}</SticksContainer>;
};
