import styled from "styled-components/native"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"
import { ThemeProps } from "src/types/index"

export const DoneButtonView = styled(SoftButtonView)<ThemeProps>`
  background-color: ${(props) => props.theme.brandPrimary};
  align-self: flex-end;
  margin: 25px 20px 0 0;
`

export const DoneButtonText = styled(SoftButtonText)`
  color: #fff;
`
