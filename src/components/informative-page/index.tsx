import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import {
  UserLocationState,
  SetAccurateLocationAction,
} from "src/redux/user-location/types"
import { InitialState } from "src/redux/initialState"
import {
  userLocationActions,
  asyncUserLocationActions,
} from "src/redux/user-location/actions"
import InformativePage from "./index"

export interface MapDispatchProps {
  fetchApproximateLocation: () => Promise<any>
  setAccurateLocation: (location: UserLocationState) => void
}

export interface MapStateProps {
  location: UserLocationState
}

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
) => ({
  fetchApproximateLocation: () =>
    dispatch(asyncUserLocationActions.fetchApproximateLocation()),
  setAccurateLocation: (
    location: UserLocationState,
  ): SetAccurateLocationAction =>
    dispatch(userLocationActions.setAccurateLocation(location)),
})

const mapState = (state: InitialState): MapStateProps => ({
  location: state.userLocation,
})

export default connect(
  mapState,
  mapDispatch,
)(InformativePage)
