import React from "react"
import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import ThemeProps from "src/types/ThemeProps"

const Container = styled.View`
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
`

const Message = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textTertiary};
  font-size: 14px;
`

const PlainButtonText = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.brandPrimary};
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`

const AppIntroInvite = () => {
  return (
    <Container>
      <Message>Wanna know how this works?</Message>
      <TouchableOpacity>
        <PlainButtonText>Check this out</PlainButtonText>
      </TouchableOpacity>
    </Container>
  )
}

export default AppIntroInvite
