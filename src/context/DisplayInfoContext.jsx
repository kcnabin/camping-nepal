import { createContext, useState } from "react";

export const DisplayInfoContext = createContext({})

export const DisplayInfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState('')

  return (
    <DisplayInfoContext.Provider value={{info, setInfo}} >
      {info ? (
        <div className="alert alert-secondary d-flex justify-content-between">
          <div>
            {info}
          </div>
    
          <div
            onClick={() => setInfo('')}
            className="btn p-0 m-0"
          >
            X
          </div>
          
        </div>
      ) : ""}

      {children}
    </DisplayInfoContext.Provider>
  )
}