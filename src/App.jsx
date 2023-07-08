import { Routes, Route } from "react-router-dom"
import axios from "axios"
import Layout from "./Layout"

import LoginPage from "./pages/login/LoginPage"
import SignupPage from "./pages/signup/SignupPage"
import IndexPage from "./pages/index/IndexPage"
import NotFound from "./pages/not-found/NotFound"
import BookingPage from "./pages/booking/BookingPage"

import UserBookingLayout from "./pages/account/components/userBookings/UserBookingLayout"
import MyBookingLayout from "./pages/account/components/myBookings/MyBookingLayout"
import ProfileLayout from "./pages/account/components/profile/ProfileLayout"
import MyPlacesLayout from "./pages/account/components/places/MyPlacesLayout"
import SearchPage from "./pages/search/SearchPage"

const App = () => {
  axios.defaults.baseURL = `http://localhost:4000`

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="search" element={<SearchPage />} />

          <Route path="/places/:placeId" element={<BookingPage />} />
          <Route path="/places/:placeId/:action" element={<BookingPage />} />
          <Route path="/places/:placeId/edit/:bookingId" element={<BookingPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/account" element={<Layout />} >
          <Route path="profile" element={<ProfileLayout />} />
          <Route path="user-bookings" element={<UserBookingLayout />} />
          <Route path="my-bookings" element={<MyBookingLayout />} />
          <Route path="my-places" element={<MyPlacesLayout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App