import { Outlet } from "react-router-dom"
import Header from "./header/Header"
import { DisplayInfoContextProvider } from "./context/DisplayInfoContext"

const Layout = () => {
  return (
    <>
      <Header />

      <DisplayInfoContextProvider>
        <Outlet />
      </DisplayInfoContextProvider>
    </>
  )
}

export default Layout