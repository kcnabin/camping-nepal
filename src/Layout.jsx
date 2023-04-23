import { Outlet } from "react-router-dom"
import Header from "./header/Header"


const Layout = () => {
  return (
    <>
      <Header />
      <div className="my-3 mx-4">
        <Outlet />
      </div>
    </>
  )
}

export default Layout