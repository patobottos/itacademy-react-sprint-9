import React, { useEffect, useState } from "react";
import { useMyContext } from "../../application/Provider";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from '../../application/api';
import {
  LoginMainContainer,
  LoginContainer,
  LoginButton,
  LoginFooter,
} from "./Login.styled"; 


export default function Login() {
  const [userEmailLogin, setUserEmailLogin] = useMyContext(null);
  const [userPasswordLogin, setUserPasswordLogin] = useMyContext(null);
  const [successfulLogin, setSuccessfulLogin] = useMyContext();
  const navigate = useNavigate();
  const [persons, setPersons] = useMyContext(); //TOTS ELS USUARIS

  useEffect(()=>{
    getUsersData();
  }, []);

  // RETRIEVING USER DATABASE FROM FIREBASE
  const getUsersData = async () => {
    const allUsers = await getUsers();
    setPersons(allUsers);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // WE GET OUR USERDATA FROM USERS DATABASE
    const currentUserIndex = persons.findIndex(u => u.email === userEmailLogin);
    //console.log('currentUserIndex',currentUserIndex);
   
    const savedUserData = persons[currentUserIndex];
    //console.log("userEmailLogin", userEmailLogin);
    //console.log("userPasswordLogin", userPasswordLogin);
    //console.log("savedUserData.email", savedUserData.email);
    //console.log("savedUserData.password", savedUserData.password);

    if (savedUserData === false) {
      alert("Please, sign up first");
    } else {
      if (
        userEmailLogin === savedUserData.email &&
        userPasswordLogin === savedUserData.password
      ) {
        console.log("Succesful login!");
        setSuccessfulLogin(true);
        localStorage.setItem("storedUserData", JSON.stringify(savedUserData));

        navigate("/");
      } else {
        console.log("Login error!");
      }
    }
  };

  return (
    <div>
      {successfulLogin ? (
        <div>
          <Link to="/">Successful login!</Link>
        </div>
      ) : (
        <LoginMainContainer>
          <form>
            <LoginContainer>
              <label htmlFor="email">email: </label>
              <input
                type="email"
                value={userEmailLogin}
                id="userEmail"
                name="userEmail"
                placeholder="Enter your email"
                required
                onChange={(event) => setUserEmailLogin(event.target.value)}
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
            <LoginButton type="button" onClick={handleLogin}>
              LOG IN
            </LoginButton>
          </form>
          <LoginFooter onClick={() => navigate('/signup')}>
            Don't you have an account? Register here!
          </LoginFooter>
        </LoginMainContainer>
      )}
    </div>
  );
}