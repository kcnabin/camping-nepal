import { Outlet } from "react-router-dom"
import Header from "./header/Header"


const Layout = () => {
  return (
    <>
      <Header />
      <div className="container p-0">
        <Outlet />
      </div>
    </>
  )
}

export default Layout