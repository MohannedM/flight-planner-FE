import { RouteComponentProps } from "react-router";
import { deleteFlightType, flightDataType, flightDismissErrorType, getAdminFlightsType, getFlightType } from "../../../store/flights";

export interface ViewFlightProps extends RouteComponentProps<{flight_id: string}> {
    loading: boolean
    flight: flightDataType | null
    onGetFlight: (flight_id: string) => getFlightType
    error: string | null
    redirect: boolean
    isAdmin: boolean | null
    onGetFlights: () => getAdminFlightsType
    onDeleteFlight: (flight_id: string) => deleteFlightType
    onDismissError: () => flightDismissErrorType
}