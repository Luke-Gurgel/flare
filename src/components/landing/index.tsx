import React from "react"
import styled from "styled-components/native"
import { Page, LogoIcon } from "src/components/common/index"
import Message from "./Message"
import AuthButtons from "./AuthButtons"
import AppIntroInvite from "./AppIntroInvite"
import { NavigationProps } from "src/types/index"

const LogoContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

const Landing = ({ navigation }: NavigationProps) => {
  const showAppIntro = () => {
    navigation.navigate && navigation.navigate("appIntro")
  }

  const login = () => {
    navigation.navigate && navigation.navigate("login")
  }

  const signup = () => {
    navigation.navigate &&
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
