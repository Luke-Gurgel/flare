import React from "react"
import styled from "styled-components/native"
import Logo from "./Logo"
import Message from "./Message"
import AuthButtons from "./AuthButtons"
import AppIntroInvite from "./AppIntroInvite"

const Page = styled.View`
  flex-grow: 1;
`

const Landing = () => {
  return (
    <Page>
      <Logo />
      <Message />
      <AuthButtons />
      <AppIntroInvite />
    </Page>
  )
}

export default Landing
