import React, { useEffect } from "react"
import { Alert, BackHandler } from "react-native"
import { connect } from "react-redux"
import { compose, AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { InitialState } from "src/redux/initialState"
import { UserProfileState, UserProfileInfo } from "src/redux/user-profile/types"
import { userProfileAsyncActions } from "src/redux/user-profile/actions"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Page, LoadingModal } from "src/components/common"
import { withNavigation, NavigationScreenProps } from "react-navigation"
import { Message } from "../styled"
import ProfilePicturePicker from "./profile-picture"
import NameInputs from "./name-inputs"
import DoneButton from "./DoneButton"

const message = "Alright, let's create your profile"

export interface MapDispatchProps {
  setProfileInfo: (info: UserProfileInfo) => Promise<any>
}

export interface MapStateProps {
  userProfile: UserProfileState
}

interface Props
  extends MapDispatchProps,
    MapStateProps,
    NavigationScreenProps {}

const ProfileInfoForm = ({
  userProfile,
  setProfileInfo,
  navigation,
}: Props) => {
  const setUserProfile = () => {
    setProfileInfo({
      fullName: "Luke Gurgel",
      profilePicture:
        "https://pbs.twimg.com/profile_images/1126358830445662208/IPh6PTBx.jpg",
    })
  }

  useEffect(() => {
    if (userProfile.status === "success") {
      setTimeout(() => navigation.navigate("informativePage"), 750)
    } else if (userProfile.status === "error") {
      Alert.alert("Could not set profile info")
    }

    const blockAndroidBackButtonTap = () => true
    BackHandler.addEventListener("hardwareBackPress", blockAndroidBackButtonTap)

    return function cleanup() {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        blockAndroidBackButtonTap,
      )
    }
  })

  return (
    <Page>
      <KeyboardAwareScrollView>
        <Message>{message}</Message>
        <ProfilePicturePicker />
        <NameInputs />
        <DoneButton title="Done" onPress={setUserProfile} />
      </KeyboardAwareScrollView>
      <LoadingModal visible={userProfile.loading} />
    </Page>
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  userProfile: state.userProfile,
})

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
): MapDispatchProps => ({
  setProfileInfo: (info: UserProfileInfo) =>
    dispatch(userProfileAsyncActions.setProfileInfo(info)),
})

export default compose(
  withNavigation,
  connect(
    mapState,
    mapDispatch,
  ),
)(ProfileInfoForm)
