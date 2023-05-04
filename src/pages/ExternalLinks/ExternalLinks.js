import {
  MainContainer,
  ProjectContainer,
  ProjectTitle,
  ProjectDescription,
} from "./ExternalLinks.styled";
import picture1 from "../../assets/ExternalLink_Page_1.png";
import picture2 from "../../assets/ExternalLink_Page_2.png";
import picture3 from "../../assets/ExternalLink_Page_3.png";
import picture4 from "../../assets/ExternalLink_Page_4.png";
import picture5 from "../../assets/ExternalLink_Page_5.png";
import picture6 from "../../assets/ExternalLink_Page_6.png";

const ExternalLinks = () => {
  return (
    <MainContainer>
      <h1>We provide you with some interesting links:</h1>
      <ul>
        <li>
          <ProjectContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://es.goobix.com/juegos-en-linea/nim/"
            >
              <img src={picture2} alt="Goobix" />
            </a>
            <ProjectTitle className="project-title">Goobix</ProjectTitle>
            <ProjectDescription>
              You play against the computer. In your turn, you may only remove pieces of a single pile, the number of pieces you decide. The player who removes the last piece is the winner.
            </ProjectDescription>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.archimedes-lab.org/game_nim/play_nim_game.html"
            >
              <img src={picture3} alt="Archimedes Lab" />
            </a>
            <ProjectTitle className="project-title">
              Archimedes' Lab Nim Game
            </ProjectTitle>
            <ProjectDescription>
              In one move, you can remove any number of matches but only from
              one row. You win if you leave the last match for the computer.
            </ProjectDescription>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://education.jlab.org/nim/s_gamepage.html"
            >
              <img src={picture1} alt="J Lab" />
            </a>
            <ProjectTitle className="project-title">
              The Nim Number Game
            </ProjectTitle>
            <ProjectDescription>
              One single row of protons, and the one to get the last proton
              wins!
            </ProjectDescription>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.crazygames.com/game/nim-game"
            >
              <img src={picture4} alt="Crazy Games" />
            </a>
            <ProjectTitle className="project-title">
              Crazy Games Nim for kids
            </ProjectTitle>
            <ProjectDescription>
              You play against the monkey. A move consists of eating cookies
              from a pile. The player who eats the last cookie wins.
            </ProjectDescription>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.transum.org/Software/Nim/"
            >
              <img src={picture5} alt="Transum" />
            </a>
            <ProjectTitle className="project-title">
              Transum Nim Game for kids
            </ProjectTitle>
            <ProjectDescription>
              Remove any number of sticks from any row by clicking on them.
              Whoever removes the last stick wins!
            </ProjectDescription>
          </ProjectContainer>
        </li>
        <li>
          <ProjectContainer>
            <a target="_blank" rel="noreferrer" href="http://benpyle.com/nim/">
              <img src={picture6} alt="Ben Pyle" />
            </a>
            <ProjectTitle className="project-title">
              Ben Pyle's Nim
            </ProjectTitle>
            <ProjectDescription>
              You can remove any number of pennies from any row at a time. You
              win if the computer takes the last penny.
            </ProjectDescription>
          </ProjectContainer>
        </li>
      </ul>
    </MainContainer>
  );
};

export default ExternalLinks;
