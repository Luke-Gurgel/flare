import React from "react"
import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

const AuthButtonsContainer = styled.View`
  flex-grow: 1;
  align-items: center;
`

const AuthButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 12px 0;
  margin: 10px 0;
  border-radius: 12px;
`
const AuthButtonText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`

const LoginButton = styled(AuthButton)<ThemeProps>`
  background-color: ${(props) => props.theme.brandPrimary};
`
const LoginButtonText = styled(AuthButtonText)`
  color: white;
`

const SignupButton = styled(AuthButton)`
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.brandPrimary}`};
`
const SignupButtonText = styled(AuthButtonText)`
  color: ${(props) => props.theme.brandPrimary};
`

const AuthButtons = () => {
  return (
    <AuthButtonsContainer>
      <LoginButton>
        <LoginButtonText>Log in</LoginButtonText>
      </LoginButton>
      <SignupButton>
        <SignupButtonText>Sign up</SignupButtonText>
      </SignupButton>
    </AuthButtonsContainer>
  )
}

export default AuthButtons
