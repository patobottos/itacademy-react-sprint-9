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
