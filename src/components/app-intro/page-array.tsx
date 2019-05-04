import React from "react"
import AppIntroPage from "./AppIntroPage"

const firstPageTitle = "Save time. Delegate."
const secondPageTitle = "Make that side money."
const thirdPageTitle = "Join us. We'll make your life better."

const firstPageDescription =
  "Find someone to do the things you don’t want / know how / have time to do."
const secondPageDescription =
  "Earn extra money by completing tasks and chores for others."
const thirdPageDescription =
  "Our goal is to make the lives of our users easier and better. Join us!"

const pageArray: JSX.Element[] = [
  <AppIntroPage
    title={firstPageTitle}
    description={firstPageDescription}
    key={0}
  />,
  <AppIntroPage
    title={secondPageTitle}
    description={secondPageDescription}
    key={1}
  />,
  <AppIntroPage
    title={thirdPageTitle}
    description={thirdPageDescription}
    key={2}
  />,
]

export default pageArray
