import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components/native"
import instantiateStore from "./src/redux/store"
import themes from "src/styles/themes/index"
import OnboardingNavigator from "src/components/navigators/OnboardingNavigation"

const store = instantiateStore()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <OnboardingNavigator />
    </ThemeProvider>
  </Provider>
)

export default App
