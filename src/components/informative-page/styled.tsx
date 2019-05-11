import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

export const ImageContainer = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

export const MessageTitle = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 28px;
  font-weight: 700;
  text-align: left;
`

export const Message = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 17px;
  text-align: justify;
`

export const ButtonsContainer = styled.View`
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
