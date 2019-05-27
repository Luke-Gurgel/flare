import styled from "styled-components/native"
import { ThemeProps } from "src/types"

export const InputsRow = styled.View`
  flex-direction: row;
  padding-top: 40px;
`

export const InputContainer = styled.View`
  flex-grow: 1;
  margin: 0 5px;
`

export const InputLabel = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 16px;
  font-weight: 800;
`

export const Input = styled.TextInput.attrs({
  allowFontScaling: true,
  autoCapitalize: "words",
})<ThemeProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.textPrimary};
  flex-grow: 1;
  height: 40px;
  background-color: white;
  border-radius: 4px;
  border-width: 0;
  margin-top: 8px;
  padding-left: 8px;
  shadow-color: rgb(150, 150, 150);
  shadow-offset: ${"1px 1px"};
  shadow-opacity: 0.3;
  shadow-radius: 5;
  elevation: 1;
`
