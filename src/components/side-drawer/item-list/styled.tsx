import styled from "styled-components/native"
import { ThemeProps } from "src/types"

export const ItemListContainer = styled.ScrollView`
  flex-grow: 1;
  margin-top: 20px;
`

interface Props extends ThemeProps {
  isActive: boolean
}

export const ItemContainer = styled.TouchableOpacity<Props>`
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px 12px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${({ isActive }) => {
    return isActive ? "rgba(107,247,192, 0.2)" : "transparent"
  }};
`

export const ItemTitle = styled.Text<Props>`
  color: ${({ isActive, theme }) => {
    return isActive ? theme.brandPrimary : theme.textSecondary
  }};
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  margin-left: 12px;
`
