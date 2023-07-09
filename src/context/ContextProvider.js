import jwtDecode from "jwt-decode";

const { createContext, useState, useContext, useEffect } = require("react");


const StateContext = createContext({
    // user : null,
    token:null,
    // setUser:()=>{},
    setToken:()=>{},
   
})

export const ContextProvider = ({children}) => {
   
    const [user, setUser] = useState({});
    const [username,setUsername] = useState(null) 
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    

   const _verifyToken = () => {
        try {
          const value = localStorage.getItem('ACCESS_TOKEN');
          if (value !== null) {
            decodeToken(value)
        }

        } catch (error) {
          console.log(error);
        }
      }

    useEffect(()=>{
        _verifyToken();
    },[])

    const decodeToken = (userToken)=>{
        const token = userToken;
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.sub);
      }
    const setToken = (token) =>{
        _setToken(token)
        if (token) {
          localStorage.setItem('ACCESS_TOKEN', token);
          decodeToken(token);
        } else {
          localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const signOut = async () => {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  
    return (
        <StateContext.Provider value={{
            user,
            token,
            username,
            setUser,
            setUsername,
            setToken,
            signOut
        }}>
    
        {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);
