import React from 'react'

const DashboardLayout = ({ left, right }) => {

  return (
    <div className="">
      <div className="d-flex">

        <div className="semi-gray d-none d-md-block p-4">
          {left}
        </div>

        <div className="flex-grow-1">
          <div className="p-3 p-md-4">
            {right}
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout