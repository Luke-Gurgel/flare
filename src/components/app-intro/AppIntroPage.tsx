import React from "react"
import styled from "styled-components/native"
import { ThemeProps } from "src/types/index"
import { width } from "src/utils/device"

interface Props {
  title: string
  description: string
}

const PageContainer = styled.View`
  flex-grow: 1;
  width: ${() => width};
  padding: 20px;
`

const PageTitle = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textPrimary};
  font-size: 28px;
  font-weight: bold;
  margin-top: 12px;
`

const PageDescription = styled.Text<ThemeProps>`
  color: ${(props) => props.theme.textSecondary};
  font-size: 16px;
  margin-top: 12px;
`

const AppIntroPage = ({ title, description }: Props) => {
  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <PageDescription>{description}</PageDescription>
    </PageContainer>
  )
}

export default AppIntroPage
