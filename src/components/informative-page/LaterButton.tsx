import React from "react"
import { TouchableOpacity } from "react-native"
import { SoftButtonText } from "src/components/common/index"

const LaterButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <SoftButtonText color="lightgray">Maybe Later</SoftButtonText>
  </TouchableOpacity>
)

export default LaterButton
