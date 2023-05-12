import React, { useEffect, useState, useContext } from "react";
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
  const [userPasswordLogin, setUserPasswordLogin] = useState("");
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

    // WE GET OUR USERDATA FROM USERS DATABASE
    const currentUserIndex = userState.persons.findIndex(
      (user) => user.email === userState.userEmailLogin
    );
    //console.log("currentUserIndex", currentUserIndex);

    if (currentUserIndex < 0) {
      alert("Please, sign up first");
      navigate("/signup/");
    } else {
      const savedUserData = userState.persons[currentUserIndex];
      //console.log('savedUserData',savedUserData);

      if (
        userState.userEmailLogin === savedUserData.email &&
        userPasswordLogin === savedUserData.password
      ) {
        setUserState({ ...userState, loggedIn: true });
        // console.log('L48 - userState', userState);
        //localStorage.setItem("storedUserData", JSON.stringify(savedUserData));
        console.log("Succesful login!!");
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
              onChange={(event) => {
                setUserState({
                  ...userState,
                  userEmailLogin: event.target.value,
                });
              }}
            />
          </LoginContainer>

          <LoginContainer>
            <label htmlFor="password">password: </label>
            <input
              type="password"
              value={userPasswordLogin}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={(event) => setUserPasswordLogin(event.target.value)}
            />
          </LoginContainer>
          <LoginButton type="submit" onClick={handleLogin}>
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
