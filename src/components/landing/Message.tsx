import React from "react"
import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"

const MessageContainer = styled.View<ThemeProps>`
  justify-content: center;
  align-items: center;
  padding: 50px 0 30px 0;
`

const Title = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 28px;
  font-weight: 800;
`

const Subtitle = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 15px;
  text-align: center;
  width: 75%;
  margin-top: 10px;
`

const Message = () => {
  return (
    <MessageContainer>
      <Title>Welcome</Title>
      <Subtitle>Where things get done and money is made</Subtitle>
    </MessageContainer>
  )
}

export default Message
