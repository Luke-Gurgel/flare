export enum ThemeActionTypes {
  switchTheme = "switchTheme",
}

export interface SwitchThemeAction {
  type: ThemeActionTypes.switchTheme
}

export const themeActions = {
  switchTheme: (): SwitchThemeAction => ({
    type: ThemeActionTypes.switchTheme,
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
  return action.type === ThemeActionTypes.switchTheme
    ? { isDark: !state.isDark }
    : state
}
