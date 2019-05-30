import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { userLocationAsyncActions } from "src/redux/user-location/actions"
import { UserLocationState } from "src/redux/user-location/types"
import InformativePage from "./InformativePage"
import { NavigationScreenProps } from "react-navigation"

export interface MapDispatchProps {
  fetchLocation: () => Promise<any>
  fetchApproximateLocation: () => Promise<any>
}

export interface MapStateProps {
  userLocation: UserLocationState
}

export interface Props
  extends MapDispatchProps,
    MapStateProps,
    NavigationScreenProps {}

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
) => ({
  fetchLocation: () => dispatch(userLocationAsyncActions.fetchLocation()),
  fetchApproximateLocation: () =>
    dispatch(userLocationAsyncActions.fetchApproximateLocation()),
})

const mapState = (state: InitialState): MapStateProps => ({
  userLocation: state.userLocation,
})

export default connect(
  mapState,
  mapDispatch,
)(InformativePage)
