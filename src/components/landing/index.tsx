import React from "react"
import styled from "styled-components/native"
import { Page, LogoIcon } from "src/components/common/index"
import Message from "./Message"
import AuthButtons from "./AuthButtons"
import AppIntroInvite from "./AppIntroInvite"
import { NavigationScreenProps } from "react-navigation"

const LogoContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

const Landing = ({ navigation }: NavigationScreenProps) => {
  const showAppIntro = () => {
    navigation.navigate("appIntro")
  }

  const login = () => {
    navigation.navigate("login")
  }

  const signup = () => {
    navigation.navigate("signup", { comingFromLanding: true })
  }

  return (
    <Page>
      <LogoContainer>
        <LogoIcon size={180} />
      </LogoContainer>
      <Message />
      <AuthButtons login={login} signup={signup} />
      <AppIntroInvite showAppIntro={showAppIntro} />
    </Page>
  )
}

export default Landing
