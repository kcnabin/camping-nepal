import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        hideProgressBar
      />
      <Header />
      <Outlet />
    </>
  )
}

export default Layout