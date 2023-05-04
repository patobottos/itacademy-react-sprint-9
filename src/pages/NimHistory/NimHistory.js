import { MainContainer } from "./NimHistory.styled";
import MarienbadVideo from "./MarienbadVideo";

const NimHistory = () => {
  return (
    <div>
      <MainContainer>
        <div>
          <p>
            <span className="bold">Nim</span> is a mathematical game of logic
            and strategy in which two players take turns removing objects from
            different piles or groups.{" "}
            <a href="https://books.google.es/books/about/The_Words_of_Mathematics.html?id=wWzBAQAACAAJ&redir_esc=y">
              Steven Schwartzman
            </a>{" "}
            traces the possible origin of the word to the German verb{" "}
            <span className="italics">nehmen</span>, "to take", with an
            imperative singular form <span className="italics">nim</span>.
          </p>
        </div>

        <div>
          <p>
            On each turn, a player must remove at least one object, and may
            remove any number of objects provided they all come from the same
            pile. Depending on the version being played, the goal of the game is
            either to avoid taking the last object or to take the last object (a{" "}
            <span className="italics">misère</span> game). The name and the
            complete theory of the game were invented by the Harvard University
            professor{" "}
            <a href="https://en.wikipedia.org/wiki/Charles_L._Bouton">
              Charles L. Bouton
            </a>
            , who published the article{" "}
            <span className="italics">
              <a href="https://doi.org/10.2307/1967631">
                "Nim, A Game with a Complete Mathematical Theory"
              </a>
            </span>
            , at Annals of Mathematics, in 1902.
          </p>
        </div>

        <div>
          <p>
            <span className="italics bold">Marienbad</span> was a 1962 Polish
            puzzle mainframe game created by Elwro engineer{" "}
            <a href="https://pl.wikipedia.org/wiki/Witold_Podg%C3%B3rski">
              Witold Podgórski
            </a>{" "}
            in Wrocław, Poland for its Odra 1003. It was an adaption of the
            logic game of nim. Inspired by the discussion in the magazine
            Przekrój of a variant of nim in the 1961 film{" "}
            <span className="italics">
              Last Year at Marienbad (L'année dernière à Marienbad)
            </span>
            , named "Marienbad" by the magazine, Podgórski programmed the game
            for the in-development 1003 mainframe, released in 1963. The game
            had players opposing the computer in alternating rounds of removing
            matches from a set, with the last player to take a match the loser.
            As the computer always played the optimal moves, it was essentially
            unbeatable.
          </p>
        </div>

        <div className="video-box">
          <iframe
          className="video-screen"
            src="https://www.youtube.com/embed/-aPDfqYrIcg?autoplay=1&mute=1"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope;"
            allowfullscreen
          ></iframe>
          <p className="video-footer">Extract of the film:<span className="italics">"L'année dernière à Marienbad"</span>, by Alain Resnais, 1961.</p>
        </div>
      </MainContainer>
    </div>
  );
};

export default NimHistory;
