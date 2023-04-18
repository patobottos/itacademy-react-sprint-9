import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const PlayingBtn = styled.button`
background-color: #9f9daf;
color: white;
border: 1px solid transparent;
height: 50px;
width: 110px;
border-radius: 10px;
margin: 0 10px;
padding: 5px;
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
