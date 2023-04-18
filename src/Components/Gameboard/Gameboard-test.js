import React from "react";
import { GameboardStyled } from "./Gameboard.styled";

const Gameboard = () => {
  return (
    <GameboardStyled>
      <div className="line1">
        <p className="playing">
          <span>I</span>
        </p>
      </div>
      <div className="line3">
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
      </div>
      <div className="line5">
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
      </div>
      <div className="line7">
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
        <p className="playing">
          <span>I</span>
        </p>
      </div>
    </GameboardStyled>
  );
};

export default Gameboard;