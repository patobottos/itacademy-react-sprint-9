import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from '../../application/api';
import {
  LoginMainContainer,
  LoginContainer,
  LoginButton,
  LoginFooter,
} from "./Login.styled";


export default function Login() {
  const [userEmailLogin, setUserEmailLogin] = useState("");
  const [userPasswordLogin, setUserPasswordLogin] = useState("");
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const navigate = useNavigate();

  const [users, setUsers] = useState(null);

  const getUsersData = async () => {
    const allUsers = await getUsers();
    console.log ('all Users=>', allUsers);
    setUsers(allUsers);
    console.log ('users=>', users);
  }

  useEffect(()=>{
    getUsersData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    //const savedUserData = localStorage.getItem("userInfo");
    //const savedUserDataParsed = JSON.parse(savedUserData);

    // CAPTURAR USERDATA DE LA BBDD
    const savedUserData = "ALGO";
    const savedUserDataParsed = "ALGO MÁS";

    console.log("saved user data al inicio", savedUserDataParsed);
    console.log("userEmailLogin", userEmailLogin);
    console.log("userPasswordLogin", userPasswordLogin);
    console.log("savedUserDataParsed.email", savedUserDataParsed.email);
    console.log("savedUserDataParsed.password", savedUserDataParsed.password);

    if (savedUserData === false) {
      alert("Please, sign up first");
    } else {
      if (
        userEmailLogin === savedUserDataParsed.email &&
        userPasswordLogin === savedUserDataParsed.password
      ) {
        console.log("Succesful login!");
        setSuccessfulLogin(true);
        localStorage.setItem("userInfo", JSON.stringify(savedUserData));

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