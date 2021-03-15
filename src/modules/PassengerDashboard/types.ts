import { flightDataType, flightDismissErrorType, getBookedFlightsType } from "../../store/flights"

export interface PassengerDashboardProps {
    flights: flightDataType[]
    loading: boolean
    error: string | null
    onGetFlights: () => getBookedFlightsType
    onDismissError: () => flightDismissErrorType
}