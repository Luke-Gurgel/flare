import React, { useState, useEffect } from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Page, LoadingModal } from "src/components/common"
import { withNavigation, NavigationScreenProps } from "react-navigation"
import { Message } from "../styled"
import ProfilePicturePicker from "./profile-picture"
import NameInputs from "./name-inputs"
import DoneButton from "./DoneButton"

const message = "Alright, let's create your profile"

const ProfileInfoForm = ({ navigation }: NavigationScreenProps) => {
  const [requestStatus, setRequestStatus] = useState({
    loading: false,
    success: false,
  })

  const setUserProfile = () => {
    setRequestStatus({ loading: true, success: false })
    setTimeout(() => {
      setRequestStatus({ loading: false, success: true })
    }, 1000)
  }

  useEffect(() => {
    if (requestStatus.success && !requestStatus.loading) {
      navigation.navigate("informativePage")
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
      <LoadingModal visible={requestStatus.loading} />
    </Page>
  )
}

export default withNavigation(ProfileInfoForm)
