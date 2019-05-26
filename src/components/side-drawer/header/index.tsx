import React from "react"
import { connect } from "react-redux"
import { ProfilePicture, UserName, UserEmail } from "./styled"
import { InitialState } from "src/redux/initialState"
import { UserProfileState } from "src/redux/user-profile/types"

interface MapStateProps {
  userProfile: UserProfileState
  userEmail: string
}

const DrawerHeader = ({ userProfile, userEmail }: MapStateProps) => {
  return (
    <>
      <ProfilePicture source={{ uri: userProfile.profilePicture }} />
      <UserName>{userProfile.fullName}</UserName>
      <UserEmail>{userEmail}</UserEmail>
    </>
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  userProfile: state.userProfile,
  userEmail: state.userAuth.email,
})

export default connect(mapState)(DrawerHeader)
