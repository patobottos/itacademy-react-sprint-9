import styled, { css } from "styled-components";

export const PopupBackground = styled.div`
  display: flex;
  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.3s;
`;

export const PopupOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  overflow: hidden;
`;

export const PopupContentBox = styled.div`
  background: rgb(183, 186, 210, 0.9);
  border-radius: 4px;
  width: 70vw;
  min-height: 30%;
  min-height: 50%;
  padding: 20px;
  position: relative;
  font-size: 1.2rem;
  text-align: left;
  margin: 40px auto;
  border: 1px solid #455367;
  z-index: 9999;
  p,
  h1,
  h2 {
    color: black;
  }
`;

export const PopupText = styled.div`
  margin: 3vh auto;
  text-align: left;
  line-height: 25px;
  font-family: Raleway;
  font-size: 0.9rem;
  font-weight: 500;
  color: #2c394e;
`;

export const PopupVideoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const PopupButton = styled.button`
  position: relative;
  height: 30px;
  with: 30px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #666;
  cursor: pointer;
  font-size: 1.4rem;
  transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;

  :hover {
    transform: rotate(180deg);
    color: #fff;
  }
`;
