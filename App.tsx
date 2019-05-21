import React from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components/native"
import createStore from "./src/redux/store"
import themes from "src/styles/themes/index"
import Bootstrap from "src/components/navigators/Bootstrap"

const store = createStore()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <Bootstrap />
    </ThemeProvider>
  </Provider>
)

export default App
