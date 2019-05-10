import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

export const AuthButtonsContainer = styled.View`
  flex-grow: 1;
  align-items: center;
`

export const AuthButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 12px 0;
  margin: 10px 0;
  border-radius: 12px;
`
export const AuthButtonText = styled.Text`
  font-size: 18px;
  font-weight: 800;
`

export const LoginButton = styled(AuthButton)<ThemeProps>`
  background-color: ${(props) => props.theme.brandPrimary};
`

export const LoginButtonText = styled(AuthButtonText)`
  color: white;
`

export const SignupButton = styled(AuthButton)`
  background-color: transparent;
  border: ${(props) => `1px solid ${props.theme.brandPrimary}`};
`

export const SignupButtonText = styled(AuthButtonText)`
  color: ${(props) => props.theme.brandPrimary};
`
