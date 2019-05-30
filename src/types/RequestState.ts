export type LocationRequestStatus = "success" | "error" | "waiting" | "none"

export default interface RequestState {
  readonly status: LocationRequestStatus
  readonly loading: boolean
  readonly error?: string
}
