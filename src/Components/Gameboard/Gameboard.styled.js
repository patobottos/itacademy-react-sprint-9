import styled from "styled-components";

export const GameboardStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  margin: 20px auto;
  padding: 5px 0;
  max-width: 60vw;
  max-height: 60vh;

  .line1,
  .line3,
  .line5,
  .line7 {
    margin-top: 5%;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: skyblue;
  color: white;
`;
