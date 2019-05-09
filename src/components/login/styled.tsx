import React from "react"
import { TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/AntDesign"
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
