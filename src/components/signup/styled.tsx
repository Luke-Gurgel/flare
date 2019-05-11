import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"

export const PageTitle = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 22px;
  font-weight: 700;
  text-align: center;
`

export const Message = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 28px;
  font-weight: bold;
  margin-top: 40px;
`

export const Description = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 16px;
  margin-top: 12px;
`

export const InputContainer = styled.View<ThemeProps>`
  height: 44px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundTertiary};
  border-radius: 6px;
  padding: 0 20px 0 15px;
  margin-top: 15px;
`

export const SignupButtonView = styled(SoftButtonView)<ThemeProps>`
  background-color: ${(props) => props.theme.brandPrimary};
  align-self: flex-end;
  margin: 25px 20px 0 0;
`

export const SignupButtonText = styled(SoftButtonText)`
  color: #fff;
`

export const LegaleseContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
`

export const LegaleseMessage = styled.Text<ThemeProps>`
  font-size: 15px;
  color: ${(props) => props.theme.textSecondary};
  text-align: center;
`

export const HyperlinkButtonText = styled.Text`
  color: #6497d2;
  font-size: 15px;
  font-weight: 600;
  padding: 15px;
`
