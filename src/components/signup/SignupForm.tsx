import React, { useState } from "react"
import { View } from "react-native"
import { withNavigation } from "react-navigation"
import { EmailInput, PasswordInput, ConfirmPasswordInput } from "./SignupInputs"
import Legalese from "./Legalese"
import SignupButton from "./SignupButton"
import { NavigationProps } from "src/types/index"

const SignupForm = ({ navigation }: NavigationProps) => {
  const [loading, setLoading] = useState(false)

  const attemptSignup = () => {
    setLoading(true)
  }

  return (
    <View style={{ paddingTop: 20 }}>
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <SignupButton
        title="Sign up"
        disabled={loading}
        onPress={attemptSignup}
      />
      <Legalese />
    </View>
  )
}

export default withNavigation(SignupForm)
