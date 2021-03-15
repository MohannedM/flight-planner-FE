import { createFlightType, flightDismissErrorType, flightInputType } from "../../../store/flights";

export interface AddFlightProps {
    loading: boolean
    redirect: boolean
    error?: string | null
    onAddFlight: (flightInput: flightInputType) => createFlightType
    onDismissError: () => flightDismissErrorType
}