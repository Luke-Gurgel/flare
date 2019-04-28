import { themeState as theme, ThemeState } from "./theme/index"

export interface InitialState {
  theme: ThemeState
}

const initialState: InitialState = {
  theme,
}

export default initialState
