import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

 
  useEffect(() => {
    if (!user) {
      setUser(JSON.parse(localStorage.getItem('camper')))
    }
  }, [])
  

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}