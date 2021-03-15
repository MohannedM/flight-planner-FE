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
    FLIGHT_DISMISS_ERROR,
    BOOK_FLIGHT,
    BOOK_FLIGHT_SUCCESS,
} from './actionTypes'

import {
    startFlightCallType,
    flightCallFailedType,
    createFlightType,
    createFlightSuccessType,
    flightDismissErrorType,
    flightInputType,
    flightDataType,
    getAdminFlightsType,
    getAdminFlightsSuccessType,
    getBookedFlightsSuccessType,
    getBookedFlightsType,
    deleteFlightSuccessType,
    deleteFlightType,
    getFlightSuccessType,
    getFlightType,
    bookFlightType,
    bookFlightSuccessType,
} from './types'

export const flightDismissError: () => flightDismissErrorType = () => {
    return {
        type: FLIGHT_DISMISS_ERROR
    }
}

export const startFlightCall: () => startFlightCallType = () => {
    return {
        type: START_FLIGHT_CALL
    }
}

export const flightCallFailed: (error: string) => flightCallFailedType = (error) => {
    return {
        type: FLIGHT_CALL_FAILED,
        error,
    }
}

export const createFlight: (flightInput: flightInputType) => createFlightType = (flightInput) => {
    return {
        type: CREATE_FLIGHT,
        flightInput,
    }
}

export const createFlightSuccess: (flightData: flightDataType) => createFlightSuccessType = (flightData) => {
    return {
        type: CREATE_FLIGHT_SUCCESS,
        flightData,
    }
}

export const getAdminFlights: () => getAdminFlightsType = () => {
    return {
        type: GET_ADMIN_FLIGHTS,
    }
}

export const getAdminFlightsSuccess: (flights: flightDataType[]) => getAdminFlightsSuccessType = (flights) => {
    return {
        type: GET_ADMIN_FLIGHTS_SUCCESS,
        flights,
    }
}

export const getFlight: (flight_id: string) => getFlightType = (flight_id) => {
    return {
        type: GET_FLIGHT,
        flight_id,
    }
}

export const getFlightSuccess: (Flight: flightDataType) => getFlightSuccessType = (flight) => {
    return {
        type: GET_FLIGHT_SUCCESS,
        flight,
    }
}

export const deleteFlight: (flight_id: string) => deleteFlightType = (flight_id) => {
    return {
        type: DELETE_FLIGHT,
        flight_id,
    }
}

export const deleteFlightSuccess: (Flight: flightDataType) => deleteFlightSuccessType = (flight) => {
    return {
        type: DELETE_FLIGHT_SUCCESS,
        flight,
    }
}

export const bookFlight: (flight_id: string) => bookFlightType = (flight_id) => {
    return {
        type: BOOK_FLIGHT,
        flight_id,
    }
}

export const bookFlightSuccess: (Flight: flightDataType) => bookFlightSuccessType = (flight) => {
    return {
        type: BOOK_FLIGHT_SUCCESS,
        flight,
    }
}

export const getBookedFlights: () => getBookedFlightsType = () => {
    return {
        type: GET_BOOKED_FLIGHTS,
    }
}

export const getBookedFlightsSuccess: (flights: flightDataType[]) => getBookedFlightsSuccessType = (flights) => {
    return {
        type: GET_BOOKED_FLIGHTS_SUCCESS,
        flights,
    }
}

