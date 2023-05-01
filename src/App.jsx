import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import LoginPage from "./pages/login/LoginPage"
import SignupPage from "./pages/signup/SignupPage"
import IndexPage from "./pages/index/IndexPage"
import NotFound from "./pages/not-found/NotFound"
import AccountPage from "./pages/account/AccountPage"
import BookingPage from "./pages/booking/BookingPage"
import AddPlaceForm from "./pages/account/components/places/AddPlaceForm"

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
          <Route path="/account/places/new" element={<AddPlaceForm />} />
          <Route path="/account/places/:placeId" element={<AddPlaceForm />} />
          
          <Route path="/places/:placeId" element={<BookingPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App