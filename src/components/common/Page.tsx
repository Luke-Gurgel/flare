import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

const Page = styled.View<ThemeProps>`
  background-color: ${(props) => props.theme.backgroundPrimary};
  flex-grow: 1;
  padding: 30px 20px 20px 20px;
`

export default Page
