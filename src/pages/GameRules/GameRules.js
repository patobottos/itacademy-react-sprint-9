import { RulesContainer } from "./GameRules.styled";

const GameRules = () => {
  return (
    <RulesContainer>
      <h4>These are the rules of Marienbad Nim Game:</h4>
      <ul>
        <li>a) you may delete <span className="bold">all the sticks you want</span> in each move, and it must be <span className="bold">at least one</span>.
        </li>
        <li>b) you may delete the sticks <span className="bold">from one single line</span> in each move.</li>
        <li>c) you win if you leave the computer <span className="bold">with the last stick</span>.</li>
        <li>
          d) you can make the <span className="bold">first move</span> or you can leave the computer start the game.
        </li>
      </ul>
    </RulesContainer>
  );
};

export default GameRules;
