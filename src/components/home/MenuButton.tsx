import React from "react"
import Icon from "react-native-vector-icons/Ionicons"
import { ThemeProps } from "src/types/index"
import { withTheme } from "styled-components/native"
import { MenuButtonContainer } from "./styled"

interface Props extends ThemeProps {
  onPress: () => void
}

const MenuButton = ({ theme, onPress }: Props) => (
  <MenuButtonContainer onPress={onPress}>
    <Icon name="ios-menu" size={28} color={theme.textPrimary} />
  </MenuButtonContainer>
)

export default withTheme(MenuButton)
