import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { userLocationAsyncActions } from "src/redux/user-location/actions"
import InformativePage from "./InformativePage"

export interface MapDispatchProps {
  fetchLocation: () => Promise<any>
  fetchApproximateLocation: () => Promise<any>
}

export interface MapStateProps {
  fetchLocationError: string | null | undefined
}

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
) => ({
  fetchLocation: () => dispatch(userLocationAsyncActions.fetchLocation()),
  fetchApproximateLocation: () =>
    dispatch(userLocationAsyncActions.fetchApproximateLocation()),
})

const mapState = (state: InitialState): MapStateProps => ({
  fetchLocationError: state.userLocation.errorMessage,
})

export default connect(
  mapState,
  mapDispatch,
)(InformativePage)
