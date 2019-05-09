import React from "react"
import {
  AuthButtonsContainer,
  LoginButton,
  LoginButtonText,
  SignupButton,
  SignupButtonText,
} from "./styled"

interface Props {
  login: () => void
  // signup: () => void
}

const AuthButtons = ({ login }: Props) => {
  return (
    <AuthButtonsContainer>
      <LoginButton onPress={login}>
        <LoginButtonText>Log in</LoginButtonText>
      </LoginButton>
      <SignupButton>
        <SignupButtonText>Sign up</SignupButtonText>
      </SignupButton>
    </AuthButtonsContainer>
  )
}

export default AuthButtons
