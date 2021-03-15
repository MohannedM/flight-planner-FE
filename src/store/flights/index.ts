import { takeEvery } from 'redux-saga/effects'
import { BOOK_FLIGHT, CREATE_FLIGHT, DELETE_FLIGHT, GET_ADMIN_FLIGHTS, GET_BOOKED_FLIGHTS, GET_FLIGHT } from './actionTypes'
import { bookFlightSaga, createTaskSaga, deleteFlightSaga, getAdminFlightsSaga, getBookedFlightsSaga, getFlightSaga } from './sagas'

export type {
    createFlightType,
    flightInputType,
    flightDismissErrorType,
    bookFlightType,
    flightDataType,
    flightsState,
    getFlightType,
    deleteFlightType,
    getAdminFlightsType,
    getBookedFlightsType,
} from './types'

export {
    createFlight,
    getAdminFlights,
    getFlight,
    deleteFlight,
    bookFlight,
    flightDismissError,
} from './actions'

export { flightsReducer } from './reducers'

export function* rootFlightSaga() {
    yield takeEvery(CREATE_FLIGHT, createTaskSaga)
    yield takeEvery(GET_ADMIN_FLIGHTS, getAdminFlightsSaga)
    yield takeEvery(GET_FLIGHT, getFlightSaga)
    yield takeEvery(DELETE_FLIGHT, deleteFlightSaga)
    yield takeEvery(BOOK_FLIGHT, bookFlightSaga)
    yield takeEvery(GET_BOOKED_FLIGHTS, getBookedFlightsSaga)
}