import React from "react"
import styled from "styled-components/native"
import { SoftButtonView, SoftButtonText } from "src/components/common/index"

const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`

const InviteButtonView = styled(SoftButtonView)`
  background-color: #fff;
  margin: 25px 0;
`

const InviteButtonText = styled(SoftButtonText)`
  color: #04d697;
`

const message = "First time here? Let's get you setup!"

interface InviteButtonProps {
  title: string
  onPress: () => void
}

interface Props {
  goToSignupPage: () => void
}

const InviteButton = ({ title, onPress }: InviteButtonProps) => (
  <InviteButtonView onPress={onPress}>
    <InviteButtonText>{title}</InviteButtonText>
  </InviteButtonView>
)

const SignupInvite = ({ goToSignupPage }: Props) => {
  return (
    <Container>
      <Message>{message}</Message>
      <InviteButton title="Create account" onPress={goToSignupPage} />
    </Container>
  )
}

export default SignupInvite
