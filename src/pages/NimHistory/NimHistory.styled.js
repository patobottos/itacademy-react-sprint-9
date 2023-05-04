import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 1.4rem;
  font-weight: 300;

  p {
    text-align: left;
  }

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  .video-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    max-width: 320px;
    margin: 15px auto;
    

    .video-screen {
      border: 1px solid grey;
    }

    .video-footer {
      margin: 0.9vh 5px;
      width: 300px;
      text-align: left;
      line-height: 1rem;
      font-family: Raleway;
      font-size: 0.75rem;
      font-weight: 300;
      letter-spacing: 0.03rem;
    }
  }

  a {
    text-decoration: none;
    color: #fefd98;
    font-weight: 500;
  }
`;
