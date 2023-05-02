import styled, { css } from "styled-components";

export const UserProfileBackground = styled.div`
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

export const UserProfileOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9998;
  overflow: hidden;
  display: flex;
`;

export const UserProfileContentBox = styled.div`
  background: rgb(183, 186, 210, 0.9);
  border: 1px solid #455367;
  border-radius: 4px;
  width: 20vw;
  max-width: 300px;
  min-width: 180px;
  min-height: 25%;
  position: fixed;
  right: 20px;
  top: 20px;
  text-align: left;
  margin: 0px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const UserProfileText = styled.div`
  margin: 10px auto;
  border-radius: 3px;
  min-height: 200px;
  justify-content: center;
  align-items: center;

  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 30px auto;
    padding: 0;
  }

  li {
    display: block;
    text-align: left;
    justify-content: center;
    padding: 0px 30px;
    border-bottom: 1px solid #2c394e;
    cursor: pointer;

    :hover {
      color: #666666;
    }
  }

  .icons {
    padding-right: 20px;

    :hover {
      color: #666666;
    }
  }

  .listTop {
    border-top: 1px solid #2c394e;
  }
`;

export const UserProfileButton = styled.button`
  position: relative;
  height: 27px;
  with: 27px;
  background-color: transparent;
  border: 1px solid transparent;
  color: #666;
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;

  :hover {
    transform: rotate(180deg);
    color: #fff;
  }
`;
