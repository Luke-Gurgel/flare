import React from "react"
import { Provider } from "react-redux"
import createStore from "./src/redux/store"
import Bootstrap from "src/components/navigators/Bootstrap"

const store = createStore()

const App: React.FC = () => (
  <Provider store={store}>
    <Bootstrap />
  </Provider>
)

export default App
