import React from "react"
import { ButtonProps } from "src/types/index"
import { SignupButtonView, SignupButtonText } from "./styled"

const SignupButton = ({ title, onPress }: ButtonProps) => (
  <SignupButtonView onPress={onPress}>
    <SignupButtonText>{title}</SignupButtonText>
  </SignupButtonView>
)

export default SignupButton
