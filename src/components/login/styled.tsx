import LinearGradient from "react-native-linear-gradient"
import { Hoshi } from "react-native-textinput-effects"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"
import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

export const GradientPage = styled(LinearGradient).attrs({
  colors: ["#39F3BB", "#90F9C4"],
})`
  flex-grow: 1;
  padding: 45px 20px 20px 20px;
`

export const LogoContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-top: 30px;
`

export const AppName = styled.Text`
  font-size: 35px;
  font-weight: 900;
  color: #04d697;
  text-align: left;
`

export const EmailInput = styled(Hoshi).attrs({
  keyboardType: "email-address",
  autoCapitalize: "none",
  autoCorrect: false,
  label: "Email",
  borderColor: "#04d697",
  borderHeight: 1,
  backgroundColor: "transparent",
  labelStyle: { color: "#04d697", fontWeight: "600" },
  underlineColorAndroid: "transparent",
  inputStyle: { color: "#fff" },
})`
  border-bottom-color: #04d697;
  border-bottom-width: 1;
  margin-top: 30px;
`

export const PasswordInput = styled(Hoshi).attrs({
  secureTextEntry: true,
  autoCapitalize: "none",
  autoCorrect: false,
  label: "Password",
  borderColor: "#04d697",
  borderHeight: 1,
  backgroundColor: "transparent",
  labelStyle: { color: "#04d697", fontWeight: "600" },
  inputStyle: { color: "#fff" },
})`
  border-bottom-color: #04d697;
  border-bottom-width: 1;
  margin-top: 20px;
`
export const LoginButtonView = styled(SoftButtonView)`
  background-color: #fff;
  align-self: flex-end;
  margin: 25px 20px 0 0;
`

export const LoginButtonText = styled(SoftButtonText)<ThemeProps>`
  color: ${(props) => props.theme.brandSecondary};
`

export const ForgotPasswordButtonText = styled.Text`
  font-style: italic;
  font-size: 13px;
  color: #fff;
  margin-top: 10px;
`
