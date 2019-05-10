import React from "react"
import { EmailInput, PasswordInput, LoginButton } from "./styled"

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
