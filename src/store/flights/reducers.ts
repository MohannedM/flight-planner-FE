import {
    CREATE_FLIGHT_SUCCESS,
    GET_ADMIN_FLIGHTS_SUCCESS,
    FLIGHT_DISMISS_ERROR,
    START_FLIGHT_CALL,
    FLIGHT_CALL_FAILED,
    DELETE_FLIGHT_SUCCESS,
    GET_BOOKED_FLIGHTS_SUCCESS,
    GET_FLIGHT_SUCCESS,
    BOOK_FLIGHT_SUCCESS,
} from "./actionTypes";
import {
    flightsState,
    flightsAction,
 } from "./types";

const initialState: flightsState = {
    flights: [],
    flight: null,
    bookedFlights: [],
    loading: false,
    redirect: false,
    error: null,
}

const flightsReducer: (state: flightsState, action: flightsAction) => flightsState = (state = initialState, action) => {
    switch(action.type) {
        case FLIGHT_DISMISS_ERROR:
            return {
                ...state,
                error: null,
            }
        case START_FLIGHT_CALL:
            return {
                ...state,
                loading: true,
            }
        case FLIGHT_CALL_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        case CREATE_FLIGHT_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        case GET_ADMIN_FLIGHTS_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: false,
                flights: action.flights,
            }
        case GET_FLIGHT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    flight: action.flight,
                }
        case DELETE_FLIGHT_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        case BOOK_FLIGHT_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: true,
            }
        case GET_BOOKED_FLIGHTS_SUCCESS:
            return {
                ...state,
                loading: false,
                redirect: false,
                bookedFlights: action.flights,
            }
        default: return state
    }
}

export { flightsReducer }
