import { HeaderContainer, ButtonContainer, HeaderBtn } from "./Header.styled";

const Header = () => {

  const StartNewGame = () => {
    return(
      console.log('Game started!')
    )
  }

  return (
    <HeaderContainer>
      <p className="title">The Nim Game</p>
      <ButtonContainer>
        <HeaderBtn onClick={StartNewGame}>NEW GAME</HeaderBtn>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;