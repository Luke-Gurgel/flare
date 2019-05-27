import React, { useState, useEffect } from "react"
import { View } from "react-native"
import { withNavigation } from "react-navigation"
import { EmailInput, PasswordInput, ConfirmPasswordInput } from "./SignupInputs"
import Legalese from "./Legalese"
import SignupButton from "./SignupButton"
import { NavigationScreenProps } from "react-navigation"
import { LoadingModal } from "src/components/common/index"

const SignupForm = ({ navigation }: NavigationScreenProps) => {
  const [signupRequest, setSignupRequest] = useState({
    loading: false,
    success: false,
  })

  const attemptSignup = () => {
    setSignupRequest({ loading: true, success: false })
    setTimeout(() => {
      setSignupRequest({ loading: false, success: true })
    }, 1000)
  }

  useEffect(() => {
    if (signupRequest.success && !signupRequest.loading) {
      navigation.navigate("profileInfoForm")
    }
  })

  return (
    <View style={{ paddingTop: 20 }}>
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <SignupButton title="Sign up" onPress={attemptSignup} />
      <Legalese />
      <LoadingModal visible={signupRequest.loading} />
    </View>
  )
}

export default withNavigation(SignupForm)
