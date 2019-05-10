import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import { ThemeProps } from "src/types/index"
import { withTheme } from "styled-components/native"

interface Props extends ThemeProps {
  onPress: () => void
}

const CloseButton = ({ theme, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={{ alignSelf: "flex-end" }}>
    <Icon name="closecircle" size={28} color={theme.textSecondary} />
  </TouchableOpacity>
)

export default withTheme(CloseButton)
