import axios from 'axios'
import { put } from 'redux-saga/effects'
import {
    startFlightCall,
    flightCallFailed,
    createFlightSuccess,
    getBookedFlightsSuccess,
    getFlightSuccess,
    getAdminFlightsSuccess,
    deleteFlightSuccess,
    bookFlightSuccess,
} from './actions'
import { createFlightType, deleteFlightType, getBookedFlightsType, getFlightType, getAdminFlightsType, bookFlightType } from './types'

export function* createTaskSaga(action: createFlightType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.post('http://localhost:3001/flights', action.flightInput, { withCredentials: true })
        yield put(createFlightSuccess(response.data.flight))
    } catch (error) {
        yield put(flightCallFailed(error.response.data.message))
    }
}

export function* getAdminFlightsSaga(action: getAdminFlightsType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.get('http://localhost:3001/flights', { withCredentials: true })
        yield put(getAdminFlightsSuccess(response.data.flights))
    } catch(error) {
        yield put(flightCallFailed((error.response.data.message)))
    }
}

export function* getFlightSaga(action: getFlightType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.get(`http://localhost:3001/flights/${action.flight_id}`, { withCredentials: true })
        yield put(getFlightSuccess(response.data.flight))
    } catch(error) {
        yield put(flightCallFailed((error.response.data.message)))
    }
}

export function* deleteFlightSaga(action: deleteFlightType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.delete(`http://localhost:3001/flights/${action.flight_id}`, { withCredentials: true })
        yield put(deleteFlightSuccess(response.data))
    } catch(error) {
        yield put(flightCallFailed((error.response.data.message)))
    }
}

export function* bookFlightSaga(action: bookFlightType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.put(`http://localhost:3001/flights/book/${action.flight_id}`, {}, { withCredentials: true })
        yield put(bookFlightSuccess(response.data.flight))
    } catch(error) {
        yield put(flightCallFailed((error.response.data.message)))
    }
}


export function* getBookedFlightsSaga(action: getBookedFlightsType) {
    yield put(startFlightCall())
    try {
        const response: {data: any} = yield axios.get('http://localhost:3001/flights/book', { withCredentials: true })
        yield put(getBookedFlightsSuccess(response.data.flights))
    } catch(error) {
        yield put(flightCallFailed((error.response.data.message)))
    }
}
