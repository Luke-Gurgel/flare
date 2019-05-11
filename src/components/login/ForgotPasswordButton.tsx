import React from "react"
import { TouchableOpacity } from "react-native"
import { ForgotPasswordButtonText } from "./styled"

const ForgotPasswordButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <ForgotPasswordButtonText>Forgot your password?</ForgotPasswordButtonText>
  </TouchableOpacity>
)

export default ForgotPasswordButton
