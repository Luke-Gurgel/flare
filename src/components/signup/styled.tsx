import React from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"

export const PageTitle = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`

export const Message = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 28px;
  font-weight: bold;
  margin-top: 40px;
`

export const Description = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 16px;
  margin-top: 12px;
`

export const InputContainer = styled.View<ThemeProps>`
  height: 44px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundTertiary};
  border-radius: 6px;
  padding: 0 20px 0 15px;
  margin-top: 15px;
`

export const EmailInput = () => (
  <InputContainer>
    <FontAwesomeIcon name={"envelope"} size={18} color="lightgray" />
    <TextInput
      placeholder="Email"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      style={{ flex: 1, textAlign: "right" }}
      underlineColorAndroid="transparent"
    />
  </InputContainer>
)

export const PasswordInput = () => (
  <InputContainer>
    <Entypo name={"lock"} size={20} color="lightgray" />
    <TextInput
      secureTextEntry
      placeholder="Password"
      autoCapitalize="none"
      autoCorrect={false}
      style={{ flex: 1, textAlign: "right" }}
      underlineColorAndroid="transparent"
    />
  </InputContainer>
)

export const ConfirmPasswordInput = () => (
  <InputContainer>
    <Entypo name={"lock"} size={20} color="lightgray" />
    <TextInput
      secureTextEntry
      placeholder="Retype password"
      autoCapitalize="none"
      autoCorrect={false}
      style={{ flex: 1, textAlign: "right" }}
      underlineColorAndroid="transparent"
    />
  </InputContainer>
)

export const SignupButtonView = styled(SoftButtonView)<ThemeProps>`
  background-color: ${(props) => props.theme.brandPrimary};
  align-self: flex-end;
  margin: 25px 20px 0 0;
`

export const SignupButtonText = styled(SoftButtonText)`
  color: #fff;
`

interface ButtonProps {
  title: string
  onPress: () => void
}

export const SignupButton = ({ title, onPress }: ButtonProps) => (
  <SignupButtonView onPress={onPress}>
    <SignupButtonText>{title}</SignupButtonText>
  </SignupButtonView>
)

export const LegaleseContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
`

export const LegaleseMessage = styled.Text<ThemeProps>`
  font-size: 15px;
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
`

export const HyperlinkButtonText = styled.Text`
  color: #6497d2;
  font-size: 15px;
  font-weight: 600;
  padding: 15px;
`

export const HyperlinkButton = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <HyperlinkButtonText>{title}</HyperlinkButtonText>
  </TouchableOpacity>
)

export const Legalese = () => (
  <LegaleseContainer>
    <LegaleseMessage>By signing up, you agree to our</LegaleseMessage>
    <View style={{ flexDirection: "row" }}>
      <HyperlinkButton title="Terms of Use" onPress={() => {}} />
      <HyperlinkButton title="Privacy Policy" onPress={() => {}} />
    </View>
  </LegaleseContainer>
)
