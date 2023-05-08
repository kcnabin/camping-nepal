import { createContext, useState } from "react";

export const DisplayInfoContext = createContext({})

export const DisplayInfoContextProvider = ({ children }) => {
  const [info, setInfo] = useState('')

  return (
    <DisplayInfoContext.Provider value={{info, setInfo}} >
      {info ? (
        <div className="alert alert-secondary">
          <div className="container d-flex justify-content-between px-0">
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
        </div>
      ) : ""}

      {children}
    </DisplayInfoContext.Provider>
  )
}