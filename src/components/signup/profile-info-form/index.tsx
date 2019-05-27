import React, { useState } from "react"
import { Alert } from "react-native"
import { connect } from "react-redux"
import { compose, AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { InitialState } from "src/redux/initialState"
import { UserProfileState } from "src/redux/user-profile/types"
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
  setProfileInfo: (info: UserProfileState) => Promise<any>
}

export interface MapStateProps {
  requestError?: string
}

interface Props
  extends MapDispatchProps,
    MapStateProps,
    NavigationScreenProps {}

const ProfileInfoForm = ({
  navigation,
  requestError,
  setProfileInfo,
}: Props) => {
  const [loading, setLoading] = useState(false)

  const setUserProfile = async () => {
    setLoading(true)
    await setProfileInfo({
      fullName: "Luke Gurgel",
      profilePicture:
        "https://pbs.twimg.com/profile_images/1126358830445662208/IPh6PTBx.jpg",
    })
    if (requestError) {
      Alert.alert("Oops...", requestError, [
        { text: "Try again", onPress: setUserProfile },
        { text: "Cancel" },
      ])
    } else {
      navigation.navigate("informativePage")
    }
  }

  return (
    <Page>
      <KeyboardAwareScrollView>
        <Message>{message}</Message>
        <ProfilePicturePicker />
        <NameInputs />
        <DoneButton title="Done" onPress={setUserProfile} />
      </KeyboardAwareScrollView>
      <LoadingModal visible={loading} />
    </Page>
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  requestError: state.userProfile.error,
})

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
): MapDispatchProps => ({
  setProfileInfo: (info: UserProfileState) =>
    dispatch(userProfileAsyncActions.setProfileInfo(info)),
})

export default compose(
  withNavigation,
  connect(
    mapState,
    mapDispatch,
  ),
)(ProfileInfoForm)
