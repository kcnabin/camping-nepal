import { useState } from "react"


const DisplayInfo = ({text}) => {
  const [msg, setMsg] = useState(text)

  if (msg !== '') {
    return (
      <div className="alert alert-secondary d-flex justify-content-between">
        <div>
          {msg}
        </div>
  
        <div
          onClick={() => setMsg('')}
          className="btn p-0 m-0"
        >
          X
        </div>
      </div>
    )
  }
  return ('')
  
}

export default DisplayInfo