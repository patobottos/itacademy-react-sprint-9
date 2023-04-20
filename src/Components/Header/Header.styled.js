import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin: 10px 0;
  padding: 10px 20px;
  border-bottom: 0.5px solid grey;
  display: flex;

  .title {
    font-size: 3rem;
    font-family: Raleway, sans-serif;
    font-weight: 800;
    letter-spacing: 0.1rem;
  }
`;
/* Lato, Montserrat, Open Sans, Raleway, Roboto */ 

export const ButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderBtn = styled.button`
  background-color: #9f9daf;
  color: white;
  border: 1px solid transparent;
  height: 40px;
  width: 100px;
  border-radius: 15px;
  margin: 0 10px;
  cursor: pointer;
  font-family: Open Sans;
  font-weight: 500;
  transition: background-color 0.1s, box-shadow 0.1s;

  :hover {
    background-color: #6f6d7a;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
`;