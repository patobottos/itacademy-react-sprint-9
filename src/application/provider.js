import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [allValues, setAllValues] = useState({});

  return (
    <AppContext.Provider value={[allValues, setAllValues]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
