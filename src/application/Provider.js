import { createContext, useState, useContext } from "react";

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [userState, setUserState] = useState({
    successfulLogin: "",
    userEmailLogin: "",
    userPasswordLogin: "",
    persons: null,
  });

  return (
    <AppContext.Provider value={[userState, setUserState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
