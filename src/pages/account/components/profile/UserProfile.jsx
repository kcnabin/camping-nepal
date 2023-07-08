import { useState } from "react";
import { useFetchData } from "../../../../customHooks/useFetchData"
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";
import LoadingIcon from "../../../../svg-icons/LoadingIcon";

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false)
  const { value: userInfo, setValue: setUserInfo } = useFetchData('/user-info')

  if (editProfile && userInfo) {
    return (
      <ProfileForm
        user={userInfo}
        setUser={setUserInfo}
        setEditProfile={setEditProfile}
      />
    )
  }

  if (userInfo) {
    return (
      <ProfileInfo
        user={userInfo}
        setEditProfile={setEditProfile}
      />
    )
  }

  return <LoadingIcon />

}

export default UserProfile