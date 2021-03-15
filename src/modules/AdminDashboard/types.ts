import { flightDataType, flightDismissErrorType, getAdminFlightsType } from "../../store/flights"

export interface AdminDashboardProps {
    flights: flightDataType[]
    loading: boolean
    error: string | null
    onGetFlights: () => getAdminFlightsType
    onDismissError: () => flightDismissErrorType
}