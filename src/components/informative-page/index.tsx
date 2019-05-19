import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { connect } from "react-redux"
import { InitialState } from "src/redux/initialState"
import { asyncUserLocationActions } from "src/redux/user-location/actions"
import InformativePage from "./InformativePage"

export interface MapDispatchProps {
  fetchLocation: () => Promise<any>
  fetchApproximateLocation: () => Promise<any>
}

const mapDispatch = (
  dispatch: ThunkDispatch<InitialState, void, AnyAction>,
) => ({
  fetchLocation: () => dispatch(asyncUserLocationActions.fetchLocation()),
  fetchApproximateLocation: () =>
    dispatch(asyncUserLocationActions.fetchApproximateLocation()),
})

export default connect(
  null,
  mapDispatch,
)(InformativePage)
