import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignupMainContainer,
  SignupContainer,
  SignupFooter,
  SignupButton,
  SuccessfulRegistration
} from "./Signup.styled";
import { Link } from "react-router-dom";
import { createNewUser } from "../../application/api";


export default function Signup() {

  const [userData, setUserData] = useState({
    "username": "",
    "email": "",
    "password": "",
    "totalMatches": null,
    "totalVictories": null,
    "totalPoints": null
  });

  const [signedUpUser, setSignedUpUser] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    if (!userData.name || !userData.email || !userData.password) {
      alert("Please, fill in all the fields");
    } else {
      setUserData({
        "username": "",
        "email": "",
        "password": "",
        "totalMatches": null,
        "totalVictories": null,
        "totalPoints": null
      });
      //localStorage.setItem("userInfo", JSON.stringify(userData));
      createNewUser(userData);
      setSignedUpUser(true);
      navigate("/login/");
    }

    console.log("User Name:", userData.name);
    console.log("User Email:", userData.email);
    console.log("User Password:", userData.password);
    console.log("User signed up!");
    console.log("user data", userData);
  };

  return (
    <div>
      <div>
      {signedUpUser ? (
        <div>
        <SuccessfulRegistration>
        <Link to="/">Successful registration!</Link>
        </SuccessfulRegistration>
          
        </div>
      ) : (
        <SignupMainContainer>
          <form id="signup-form" onSubmit={handleSignup}>
            <SignupContainer>
              <label htmlFor="username">Your user name: </label>
              <input
                type="text"
                value={userData.name}
                id="username"
                username="username"
                placeholder="Enter your user name"
                required
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </SignupContainer>

            <SignupContainer>
              <label htmlFor="email">email: </label>
              <input
                type="email"
                value={userData.email}
                id="userEmail"
                name="userEmail"
                placeholder="Enter your email"
                required
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </SignupContainer>

            <SignupContainer>
              <label htmlFor="password">password: </label>
              <input
                type="password"
                value={userData.password}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </SignupContainer>
            <SignupButton type="submit">SIGN UP</SignupButton>
          </form>
          <SignupFooter onClick={() => navigate('/login')}>
            You already have an account? Log in here!
          </SignupFooter>
        </SignupMainContainer>
      )}
      </div>
    </div>
  );
}