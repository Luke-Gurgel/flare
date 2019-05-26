import React from "react"
import { ItemContainer, ItemTitle } from "./styled"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { withTheme } from "styled-components/native"
import { ThemeProps } from "src/types"

export interface ItemProps extends ThemeProps {
  itemTitle: string
  iconName: string
}

const Item = (props: ItemProps) => {
  const isActive = true

  return (
    <ItemContainer activeOpacity={0.5} isActive={isActive}>
      <MaterialIcon
        name={props.iconName}
        size={22}
        color={isActive ? props.theme.brandPrimary : props.theme.textPrimary}
      />
      <ItemTitle isActive={isActive}>{props.itemTitle}</ItemTitle>
    </ItemContainer>
  )
}

export default withTheme(Item)
