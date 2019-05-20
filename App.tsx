import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components/native"
import createStore from "./src/redux/store"
import themes from "src/styles/themes/index"
import RootNavigator from "src/components/navigators/RootNavigator"

const store = createStore()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <RootNavigator />
    </ThemeProvider>
  </Provider>
)

export default App
