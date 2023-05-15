import React from 'react'

const MinHeight100Vh = ({ children }) => {
  return (
    <div className="body-height d-flex">
      <div className="d-flex flex-grow-1 align-items-center justify-content-center">
        {children}
      </div>
    </div>
  )
}

export default MinHeight100Vh