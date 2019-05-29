import React from "react"
import { ButtonProps } from "src/types/index"
import { DoneButtonView, DoneButtonText } from "./styled"

const DoneButton = ({ title, onPress }: ButtonProps) => (
  <DoneButtonView onPress={onPress}>
    <DoneButtonText>{title}</DoneButtonText>
  </DoneButtonView>
)

export default DoneButton
