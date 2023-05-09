import React, { useEffect, useContext } from "react";
import { useMyContext } from "../../application/Provider";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../../application/api";
import {
  LoginMainContainer,
  LoginContainer,
  LoginButton,
  LoginFooter,
} from "./Login.styled";

const Login = () => {
  const [userState, setUserState] = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    getUsersData();
  }, []);

  // RETRIEVING USER DATABASE FROM FIREBASE
  const getUsersData = async () => {
    const allUsers = await getUsers();
    setUserState({ ...userState, persons: allUsers });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.clear();

    // WE GET OUR USERDATA FROM USERS DATABASE
    const currentUserIndex = userState.persons.findIndex(
      (user) => user.email === userState.userEmailLogin);
    console.log("currentUserIndex", currentUserIndex);

    if (currentUserIndex < 0) {
      alert("Please, sign up first");
      navigate("/signup/");
    } else {
      const savedUserData = userState.persons[currentUserIndex];
      console.log("userEmailLogin", userState.userEmailLogin);
      console.log("userPasswordLogin", userState.userPasswordLogin);
      console.log("savedUserData.email", savedUserData.email);
      console.log("savedUserData.password", savedUserData.password);

      if (
        userState.userEmailLogin === savedUserData.email &&
        userState.userPasswordLogin === savedUserData.password
      ) {
        localStorage.setItem("storedUserData", JSON.stringify(savedUserData));
        setUserState({ ...userState, successfulLogin: true });
        console.log("Succesful login!!");
        console.log('userState',userState);
        navigate("/");
      } else {
        alert("Login error! Please, try it again.");
        navigate("/login/");
      }
    }
  };

  return (
    <div>
      <LoginMainContainer>
        <form>
          <LoginContainer>
            <label htmlFor="email">email: </label>
            <input
              type="email"
              value={userState.userEmailLogin}
              id="userEmail"
              name="userEmail"
              placeholder="Enter your email"
              required
              onChange={(event) => {setUserState({ ...userState, userEmailLogin: event.target.value}) }}
            />
          </LoginContainer>

          <LoginContainer>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={userState.userPasswordLogin}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={(event) =>{ setUserState({ ...userState, userPasswordLogin: event.target.value}) }}
              
            />
          </LoginContainer>
          <LoginButton type="button" onClick={handleLogin}>
            LOG IN
          </LoginButton>
        </form>
        <LoginFooter onClick={() => navigate("/signup")}>
          Don't you have an account? Register here!
        </LoginFooter>
      </LoginMainContainer>
    </div>
  );
};

export default Login;
