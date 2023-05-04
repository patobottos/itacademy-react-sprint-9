import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  margin: 15px 5vw;
  padding: 5px 1.5vw;
  font-family: Raleway, Raleway, Montserrat, "Open Sans", sans-serif;
  font-size: 1rem;
  letter-spacing: 0.03rem;
  line-height: 2rem;
  font-weight: 300;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    cursor: pointer;
  }

  p {
    text-align: left;
  }

  .italics {
    font-style: italic;
  }

  .bold {
    font-weight: bold;
  }

  ul {
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 20px;
    list-style-type: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: #fefd98;
    font-weight: 500;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 5px;
  padding: 10px;
  font-size: 0.75rem;
`;

export const ProjectTitle = styled.div`
  margin: 10px 0;
  font-weight: 500;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const ProjectDescription = styled.div`
  margin: 10px 0;
  font-weight: 300;
  text-align: center;
  font-size: 0.8rem;
  line-height: 1rem;
  color:#CFCED7;
  letter-spacing: 0.8px;
`;