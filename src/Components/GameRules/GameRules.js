import { RulesContainer } from "./GameRules.styled";

const GameRules = () => {
  return (
    <RulesContainer>
      <p>These are the game rules:</p>
      <ul>
        <li>
          a) you may delete all the sticks you want in each move, and it must be
          at least one.
        </li>
        <li>b) you may delete the sticks from one single line in each move.</li>
        <li>c) you win if you leave the computer with the last stick.</li>
        <li>
          d) you can make the first move or you can leave the computer start the
          game.
        </li>
      </ul>
    </RulesContainer>
  );
};

export default GameRules;
