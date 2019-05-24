import React from "react"
import { StatusBar } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { NavigationScreenProps } from "react-navigation"
import { GradientPage, LogoContainer, AppName } from "./styled"
import { LogoIcon, CloseButton } from "src/components/common"
import LoginForm from "./LoginForm"
import SignupInvite from "./SignupInvite"

const Login = ({ navigation }: NavigationScreenProps) => {
  const dismiss = () => {
    navigation.dismiss()
  }

  const goToSignupPage = () => {
    navigation.navigate("signup")
  }

  return (
    <GradientPage>
      <KeyboardAwareScrollView scrollEnabled={false}>
        <StatusBar barStyle="light-content" />
        <CloseButton onPress={dismiss} color="rgba(255,255,255,0.7)" />
        <LogoContainer>
          <LogoIcon size={150} color="#04d697" />
          <AppName>Flare</AppName>
        </LogoContainer>
        <LoginForm />
      </KeyboardAwareScrollView>
      <SignupInvite goToSignupPage={goToSignupPage} />
    </GradientPage>
  )
}

export default Login
