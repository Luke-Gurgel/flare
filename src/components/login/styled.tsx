import React from "react"
import { TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/AntDesign"
import { Hoshi } from "react-native-textinput-effects"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"
import styled from "styled-components/native"

interface Props {
  onPress: () => void
}

export const CloseButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={{ alignSelf: "flex-end" }}>
    <Icon name="closecircle" size={28} color="rgba(255,255,255, 0.8)" />
  </TouchableOpacity>
)

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
  label: "Email",
  borderColor: "#04d697",
  borderHeight: 1,
  backgroundColor: "transparent",
  labelStyle: { color: "#04d697", fontWeight: "600" },
})`
  border-bottom-color: #04d697;
  border-bottom-width: 1;
  margin-top: 30px;
`

export const PasswordInput = styled(Hoshi).attrs({
  label: "Password",
  borderColor: "#04d697",
  borderHeight: 1,
  backgroundColor: "transparent",
  labelStyle: { color: "#04d697", fontWeight: "600" },
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

export const LoginButtonText = styled(SoftButtonText)`
  color: #04d697;
`

export const ForgotPasswordButtonText = styled.Text`
  font-style: italic;
  font-size: 13px;
  color: #fff;
  margin-top: 10px;
`

export const ForgotPasswordButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <ForgotPasswordButtonText>Forgot your password?</ForgotPasswordButtonText>
  </TouchableOpacity>
)
