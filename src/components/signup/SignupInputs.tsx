import React from "react"
import { TextInput } from "react-native"
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import { InputContainer } from "./styled"

export const EmailInput = () => (
  <InputContainer>
    <FontAwesomeIcon name={"envelope"} size={18} color="lightgray" />
    <TextInput
      placeholder="Email"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      style={{ flex: 1, textAlign: "right" }}
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
    />
  </InputContainer>
)
