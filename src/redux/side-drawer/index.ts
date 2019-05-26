export enum SideDrawerActionTypes {
  set_active_page = "set_active_page",
}

export interface SetActivePageAction {
  type: SideDrawerActionTypes.set_active_page
  page: string
}

export type SideDrawerAction = SetActivePageAction

export const sideDrawerActions = {
  setActivePage: (page: string): SetActivePageAction => ({
    type: SideDrawerActionTypes.set_active_page,
    page,
  }),
}

export interface SideDrawerState {
  readonly activePage: string
  readonly items: { title: string; iconName: string }[]
}

export const sideDrawerState: SideDrawerState = {
  activePage: "Home",
  items: [
    { title: "Home", iconName: "home" },
    { title: "Profile", iconName: "person" },
    { title: "Dashboard", iconName: "dashboard" },
    { title: "Settings", iconName: "settings" },
    { title: "Help", iconName: "help" },
  ],
}

export const sideDrawerReducer = (
  state = sideDrawerState,
  action: SideDrawerAction,
): SideDrawerState => {
  return action.type === SideDrawerActionTypes.set_active_page
    ? { ...state, activePage: action.page }
    : state
}
