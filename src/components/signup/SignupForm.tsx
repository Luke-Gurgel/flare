import React from "react"
import { View } from "react-native"
import {
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
  SignupButton,
  Legalese,
} from "./styled"

const SignupForm = () => {
  return (
    <View style={{ paddingTop: 20 }}>
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <SignupButton title="Sign up" onPress={() => {}} />
      <Legalese />
    </View>
  )
}

export default SignupForm
