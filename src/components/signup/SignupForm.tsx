import React, { useState } from "react"
import { View } from "react-native"
import { withNavigation } from "react-navigation"
import { EmailInput, PasswordInput, ConfirmPasswordInput } from "./SignupInputs"
import Legalese from "./Legalese"
import SignupButton from "./SignupButton"
import { NavigationProps } from "src/types/index"
import { LoadingModal } from "src/components/common/index"

const SignupForm = ({ navigation }: NavigationProps) => {
  const [signupRequest, setSignupRequest] = useState({
    loading: false,
    success: false,
  })

  const attemptSignup = () => {
    setSignupRequest({ loading: true, success: false })
    setTimeout(() => {
      setSignupRequest({ loading: false, success: true })
    }, 3000)
  }

  const goToInformativePage = () => {
    if (signupRequest.success) {
      navigation.navigate && navigation.navigate("informativePage")
    }
  }

  return (
    <View style={{ paddingTop: 20 }}>
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <SignupButton title="Sign up" onPress={attemptSignup} />
      <Legalese />
      <LoadingModal
        visible={signupRequest.loading}
        onDismiss={goToInformativePage}
      />
    </View>
  )
}

export default withNavigation(SignupForm)
