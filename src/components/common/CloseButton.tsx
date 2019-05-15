import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import { ThemeProps } from "src/types/index"
import { withTheme } from "styled-components/native"

interface Props extends ThemeProps {
  onPress: () => void
  color?: string
}

const CloseButton = ({ theme, onPress, color }: Props) => (
  <TouchableOpacity onPress={onPress} style={{ alignSelf: "flex-end" }}>
    <Icon
      name="closecircle"
      size={28}
      color={color ? color : theme.textSecondary}
    />
  </TouchableOpacity>
)

export default withTheme(CloseButton)
