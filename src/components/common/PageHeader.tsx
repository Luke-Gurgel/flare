import React from "react"
import styled from "styled-components/native"
import { BackButton, CloseButton } from "src/components/common/index"

type DismissButtonType = "back" | "close"

interface Props {
  goBack: () => void
  dismissButtonType: DismissButtonType
  centerComponent?: JSX.Element
}

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
`

const CenterComponentContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  padding-bottom: 15px;
`

const PageHeader = ({ goBack, dismissButtonType, centerComponent }: Props) => {
  const renderDismissButton = (): JSX.Element => {
    switch (dismissButtonType) {
      case "back":
        return <BackButton onPress={goBack} />
      case "close":
        return <CloseButton onPress={goBack} />
      default:
        return <></>
    }
  }

  return (
    <Header>
      <CenterComponentContainer>
        {centerComponent !== undefined ? centerComponent : <></>}
      </CenterComponentContainer>
      {renderDismissButton()}
    </Header>
  )
}

export default PageHeader
