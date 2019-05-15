import React from "react"
import { LogoIcon, BackButton } from "src/components/common/index"
import { Header, CenterComponentContainer } from "./styled"

const PageHeader = ({ goBack }: { goBack: () => void }) => {
  return (
    <Header>
      <CenterComponentContainer>
        <LogoIcon size={35} />
      </CenterComponentContainer>
      <BackButton onPress={goBack} />
    </Header>
  )
}

export default PageHeader
