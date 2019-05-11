import React from "react"
import { View, TouchableOpacity } from "react-native"
import {
  HyperlinkButtonText,
  LegaleseContainer,
  LegaleseMessage,
} from "./styled"
import { ButtonProps } from "src/types/index"

export const HyperlinkButton = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <HyperlinkButtonText>{title}</HyperlinkButtonText>
  </TouchableOpacity>
)

const Legalese = () => (
  <LegaleseContainer>
    <LegaleseMessage>By signing up, you agree to our</LegaleseMessage>
    <View style={{ flexDirection: "row" }}>
      <HyperlinkButton title="Terms of Use" onPress={() => {}} />
      <HyperlinkButton title="Privacy Policy" onPress={() => {}} />
    </View>
  </LegaleseContainer>
)

export default Legalese
