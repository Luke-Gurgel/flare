import styled from "styled-components/native"
import { ThemeProps } from "src/types"

export const SideDrawerContainer = styled.View<ThemeProps>`
  background-color: ${(props) => props.theme.backgroundPrimary};
  flex-grow: 1;
  padding: 70px 15px 20px 15px;
`
