import styled from "styled-components";

export const GameboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 600;
  margin: 10px auto;
  padding: 5px 0;
  min-width: 320px;
  height: 50vh;
`;

export const StickLine = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: skyblue;
  color: white;
`;
export const TextMainContainer = styled.div`
  margin: 0 auto;
  align-content: center;
  justify-content: center;
  width: 100vw;
  border-top: 1px solid grey;
`;

export const TextGridContainer = styled.div`
  margin: 0 auto;
  padding-top: 10px;
  align-content: center;
  justify-content: center;
  max-width: 600px;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 0.8fr;

  p {
    color: yellow;
    font-family: Roboto, Inter, Lato, Raleway, Montserrat, "Open Sans",
      sans-serif;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 0.06rem;
  }

  span {
    color: orange;
    font-weight: 300;
    padding-left: 5px;
  }
`;
