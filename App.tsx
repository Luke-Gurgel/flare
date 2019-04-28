import React from "react"
import { View } from "react-native"
import { ThemeProvider } from "styled-components/native"
import themes from "src/styles/themes/index"

const App: React.FC = () => (
  <ThemeProvider theme={themes.light}>
    <View />
  </ThemeProvider>
)

export default App
