import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import LoginPage from "./pages/login/LoginPage"
import SignupPage from "./pages/signup/SignupPage"
import IndexPage from "./pages/index/IndexPage"
import NotFound from "./pages/not-found/NotFound"
import AccountPage from "./pages/account/AccountPage"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/:subpage" element={<AccountPage />} />
          <Route path="/account/places/:placeId" element={<AccountPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App