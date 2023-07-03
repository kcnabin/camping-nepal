import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState('')

  useEffect(() => {
    if (!user) {
      const ls = localStorage.getItem('camper')

      if (ls) {
        setUser(JSON.parse(ls))
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)