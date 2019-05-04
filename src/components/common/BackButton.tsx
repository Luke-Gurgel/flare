import React from "react"
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { ThemeProps } from "src/types/index"
import { withTheme } from "styled-components/native"

interface Props extends ThemeProps {
  onPress: () => void
}

const BackButton = ({ theme, onPress }: Props) => (
  <TouchableOpacity onPress={onPress} style={{ paddingLeft: 20 }}>
    <Icon name="ios-arrow-round-back" size={28} color={theme.textSecondary} />
  </TouchableOpacity>
)

export default withTheme(BackButton)
