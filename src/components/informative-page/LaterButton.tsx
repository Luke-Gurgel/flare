import React from "react"
import { TouchableOpacity } from "react-native"
import { SoftButtonText } from "src/components/common/index"

const LaterButton = ({ onPress }: { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <SoftButtonText color="#777">Later</SoftButtonText>
  </TouchableOpacity>
)

export default LaterButton
