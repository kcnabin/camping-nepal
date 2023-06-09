import React from 'react'

const LoadingIcon = () => {
  return (
    <div className="p-2">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingIcon