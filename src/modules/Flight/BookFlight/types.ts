import { bookFlightType, flightDataType, flightDismissErrorType, getAdminFlightsType } from "../../../store/flights";

export interface BookFlightProps {
    flights: flightDataType[]
    redirect: boolean
    loading: boolean
    error?: string | null
    onBookFlight: (flight_id: string) => bookFlightType
    onDismissError: () => flightDismissErrorType
    onGetFlights: () => getAdminFlightsType
}