import React from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { Page } from "src/components/common"
import { Message } from "../styled"
import ProfilePicturePicker from "./profile-picture"
import NameInputs from "./name-inputs"
import DoneButton from "./DoneButton"

const message = "Alright, let's create your profile"

const ProfileInfoForm = () => {
  return (
    <Page>
      <KeyboardAwareScrollView>
        <Message>{message}</Message>
        <ProfilePicturePicker />
        <NameInputs />
        <DoneButton title="Done" onPress={() => {}} />
      </KeyboardAwareScrollView>
    </Page>
  )
}

export default ProfileInfoForm
