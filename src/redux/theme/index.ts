export enum ThemeActionTypes {
  switch_theme = "switch_theme",
}

export interface SwitchThemeAction {
  type: ThemeActionTypes.switch_theme
}

export const themeActions = {
  switchTheme: (): SwitchThemeAction => ({
    type: ThemeActionTypes.switch_theme,
  }),
}

export interface ThemeState {
  readonly isDark: boolean
}

export const themeState: ThemeState = {
  isDark: false,
}

export const themeReducer = (
  state = themeState,
  action: SwitchThemeAction,
): ThemeState => {
  return action.type === ThemeActionTypes.switch_theme
    ? { isDark: !state.isDark }
    : state
}
