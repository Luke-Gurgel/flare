import React from "react"
import styled from "styled-components/native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const LogoContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`
const LogoIcon = () => (
  <FontAwesome5 name={"gripfire"} size={180} color="#39F3BB" />
)

const Logo = () => (
  <LogoContainer>
    <LogoIcon />
  </LogoContainer>
)

export default Logo
