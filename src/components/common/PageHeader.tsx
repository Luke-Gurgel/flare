import React from "react"
import styled from "styled-components/native"
import { BackButton } from "src/components/common/index"

interface Props {
  goBack: () => void
  centerComponent?: JSX.Element
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 10px;
`

const CenterComponentContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
`

const PageHeader = ({ goBack, centerComponent }: Props) => (
  <Header>
    <CenterComponentContainer>
      {centerComponent !== undefined ? centerComponent : <></>}
    </CenterComponentContainer>
    <BackButton onPress={goBack} />
  </Header>
)

export default PageHeader
