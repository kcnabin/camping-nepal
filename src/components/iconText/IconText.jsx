import React from 'react'

const IconText = ({ text = "Hello", children }) => {

  return (
    <div className='align-center'>
      <div className='align-center'>
        {children}
      </div>
      <span className="ms-3">
        {text}
      </span>
    </div>
  )
}

export default IconText