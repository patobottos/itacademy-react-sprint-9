import {createContext, useState, useContext} from 'react';

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const Provider = ({ children }) =>{
    const [successfulLogin, setSuccessfulLogin] = useState();
    return (            
            <AppContext.Provider value={[successfulLogin, setSuccessfulLogin]}>
                {children}
            </AppContext.Provider>  
    );
}

export default Provider;