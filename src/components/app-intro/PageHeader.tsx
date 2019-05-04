import React from "react"
import styled from "styled-components/native"
import { BackButton, LogoIcon } from "src/components/common/index"

interface Props {
  goBack: () => void
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 10px;
`

const LogoContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
`

const PageHeader = ({ goBack }: Props) => (
  <Header>
    <LogoContainer>
      <LogoIcon size={35} />
    </LogoContainer>
    <BackButton onPress={goBack} />
  </Header>
)

export default PageHeader
