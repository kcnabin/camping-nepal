import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext({})

export const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (!search) {
      const ls = localStorage.getItem('camper-search')

      if (ls) {
        // ls is already a string
        setSearch(ls)
      }
    }
  }, [search])

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)