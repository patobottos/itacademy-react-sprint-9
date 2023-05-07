import styled from "styled-components";

export const SignupMainContainer = styled.div`
  width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #B7BAD2;
  border: 1px solid #2C394E;
  border-radius: 4px;
  line-height: 3rem;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 800;
  color: #2c394e;
`;

export const SignupContainer = styled.div`
  width: 350px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  line-height: 2.5rem;

  label {
    text-transform: uppercase;
    color: #2C394E;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 5px 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.075rem;
    color: #d4d4d4;
    background-color: #404040;
    border: 0.5px solid skyblue;
    margin-bottom: 10px;
    border-radius: 4px;

    :focus {
      border: 1px solid #9fd7ee;
    }
  }
`;

export const SignupButton = styled.button`
  min-width: 350px;
  margin: 30px 20px;
  padding: 5px 20px;
  justify-content: center;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  background-color: #65627e;
  color: #f5f5f5;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-family: Raleway, sans serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  :hover {
    background-color: #484848;
  }
`;



export const SignupFooter = styled.div`
  margin: 20px 0;
  cursor: pointer;

  :hover {
    color: #666666;
  }
`;

export const SuccessfulRegistration = styled.div`
  width: 400px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 1.1rem;
  font-size: 2rem;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  
  :hover {
    color: green;
  }
`