import React from "react"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"

const AllowButton = ({ onPress }: { onPress: () => void }) => (
  <SoftButtonView onPress={onPress}>
    <SoftButtonText>Allow</SoftButtonText>
  </SoftButtonView>
)

export default AllowButton
