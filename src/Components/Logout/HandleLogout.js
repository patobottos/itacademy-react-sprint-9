import { useMyContext } from "../../application/Provider";
import { useNavigate } from "react-router-dom";

export const HandleLogout = () => {
  console.log("click to log out 2"); // OK! 
  const [userState, setUserState] = useMyContext();
  const navigate = useNavigate();

  setUserState({});
  localStorage.clear();
  console.log('userState post borrado',userState);
  console.log("Successfully logged out!");
  navigate("/");
};
