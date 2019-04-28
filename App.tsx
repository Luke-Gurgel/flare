import React from "react"
import { View } from "react-native"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components/native"
import instantiateStore from "./src/redux/store"
import themes from "src/styles/themes/index"

const store = instantiateStore()

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>
      <View />
    </ThemeProvider>
  </Provider>
)

export default App
