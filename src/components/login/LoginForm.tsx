import React from "react"
import {
  EmailInput,
  PasswordInput,
  LoginButtonView,
  LoginButtonText,
} from "./styled"

interface LoginButtonProps {
  title: string
  onPress: () => void
}

const LoginButton = ({ title, onPress }: LoginButtonProps) => (
  <LoginButtonView onPress={onPress}>
    <LoginButtonText>{title}</LoginButtonText>
  </LoginButtonView>
)

const LoginForm = () => {
  return (
    <>
      <EmailInput />
      <PasswordInput />
      <LoginButton title="Log in" onPress={() => {}} />
    </>
  )
}

export default LoginForm
