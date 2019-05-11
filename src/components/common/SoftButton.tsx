import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

interface Props extends ThemeProps {
  backgroundColor?: string
  color?: string
}

export const SoftButtonView = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.brandPrimary};
  justify-content: center;
  align-items: center;
  padding: 14px 35px;
  border-radius: 14px;
`

export const SoftButtonText = styled.Text<Props>`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 18px;
  font-weight: 800;
`
