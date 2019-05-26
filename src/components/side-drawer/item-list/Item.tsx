import React from "react"
import { compose, Dispatch } from "redux"
import { connect } from "react-redux"
import { withTheme } from "styled-components/native"
import { ItemButton, ItemTitle } from "./styled"
import Icon from "react-native-vector-icons/MaterialIcons"
import { ThemeProps } from "src/types"
import { InitialState } from "src/redux/initialState"
import { sideDrawerActions } from "src/redux/side-drawer"
import { withNavigation, NavigationScreenProps } from "react-navigation"

interface MapStateProps {
  activePage: string
}

interface MapDispatchProps {
  setActivePage: (page: string) => void
}

interface OwnProps {
  itemTitle: string
  iconName: string
}

interface Props
  extends OwnProps,
    MapStateProps,
    MapDispatchProps,
    ThemeProps,
    NavigationScreenProps {}

const Item = (props: Props) => {
  const isActive = props.activePage === props.itemTitle

  const setPage = () => {
    props.setActivePage(props.itemTitle)
    props.navigation.closeDrawer()
  }

  return (
    <ItemButton onPress={setPage} isActive={isActive}>
      <Icon
        name={props.iconName}
        size={22}
        color={isActive ? props.theme.brandPrimary : props.theme.textPrimary}
      />
      <ItemTitle isActive={isActive}>{props.itemTitle}</ItemTitle>
    </ItemButton>
  )
}

const mapState = (state: InitialState): MapStateProps => ({
  activePage: state.sideDrawer.activePage,
})

const mapDispatch = (dispatch: Dispatch): MapDispatchProps => ({
  setActivePage: (page: string) =>
    dispatch(sideDrawerActions.setActivePage(page)),
})

export default compose(
  withNavigation,
  withTheme,
  connect(
    mapState,
    mapDispatch,
  ),
)(Item) as React.FC<OwnProps>
