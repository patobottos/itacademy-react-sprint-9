import styled from "styled-components";

export const GameboardStyled = styled.div`
  font-size: 36px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
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