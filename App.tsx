import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components/native"
import instantiateStore from "./src/redux/store"
import themes from "src/styles/themes/index"
import Landing from "src/components/landing/index"

const store = instantiateStore()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <Landing />
    </ThemeProvider>
  </Provider>
)

export default App
