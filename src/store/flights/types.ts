import { authClearType } from '../auth/types'
import {
    START_FLIGHT_CALL,
    FLIGHT_CALL_FAILED,
    CREATE_FLIGHT,
    CREATE_FLIGHT_SUCCESS,
    GET_ADMIN_FLIGHTS,
    GET_ADMIN_FLIGHTS_SUCCESS,
    GET_BOOKED_FLIGHTS,
    GET_BOOKED_FLIGHTS_SUCCESS,
    GET_FLIGHT,
    GET_FLIGHT_SUCCESS,
    DELETE_FLIGHT,
    DELETE_FLIGHT_SUCCESS,
    BOOK_FLIGHT,
    BOOK_FLIGHT_SUCCESS,
    FLIGHT_DISMISS_ERROR,
} from './actionTypes'

export interface flightDataType {
    id: string
    plane_type: string
    origin: string
    pnr?: string | null
    destination: string
    seat_count: number
    reserved_seats: number
    flight_date: string
    created_at: string
}

export interface flightInputType {
    plane_type: string
    origin: string
    destination: string
    seat_count: number
    flight_date: string
}

export interface bookInputType {
    flight_id: string
}

export interface startFlightCallType {
    type: typeof START_FLIGHT_CALL
}

export interface flightCallFailedType {
    type: typeof FLIGHT_CALL_FAILED
    error: string
}

export interface flightDismissErrorType {
    type: typeof FLIGHT_DISMISS_ERROR
}

export interface createFlightType {
    type: typeof CREATE_FLIGHT
    flightInput: flightInputType
}

export interface createFlightSuccessType {
    type: typeof CREATE_FLIGHT_SUCCESS
    flightData:  flightDataType
}

export interface getAdminFlightsType {
    type: typeof GET_ADMIN_FLIGHTS
}

export interface getAdminFlightsSuccessType {
    type: typeof GET_ADMIN_FLIGHTS_SUCCESS
    flights: flightDataType[]
}

export interface getFlightType {
    type: typeof GET_FLIGHT
    flight_id: string
}
export interface getFlightSuccessType {
    type: typeof GET_FLIGHT_SUCCESS
    flight: flightDataType
}

export interface deleteFlightType {
    type: typeof DELETE_FLIGHT
    flight_id: string
}

export interface deleteFlightSuccessType {
    type: typeof DELETE_FLIGHT_SUCCESS
    flight: flightDataType
}

export interface bookFlightType {
    type: typeof BOOK_FLIGHT
    flight_id: string
}

export interface bookFlightSuccessType {
    type: typeof BOOK_FLIGHT_SUCCESS
    flight: flightDataType
}

export interface getBookedFlightsType {
    type: typeof GET_BOOKED_FLIGHTS
}

export interface getBookedFlightsSuccessType {
    type: typeof GET_BOOKED_FLIGHTS_SUCCESS
    flights: flightDataType[]
}

export interface flightsState {
    loading: boolean
    flights: flightDataType[]
    flight: flightDataType | null
    bookedFlights: flightDataType[]
    redirect: boolean
    error: string | null
}


export type flightsAction =
authClearType | getFlightSuccessType |
startFlightCallType | flightCallFailedType |
createFlightType  | createFlightSuccessType  |
getAdminFlightsType | getAdminFlightsSuccessType   |
getBookedFlightsType | getBookedFlightsSuccessType   |
deleteFlightType | deleteFlightSuccessType |
bookFlightType | bookFlightSuccessType |
flightDismissErrorType
