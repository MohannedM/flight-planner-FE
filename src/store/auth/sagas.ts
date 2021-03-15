import { put } from 'redux-saga/effects'
import { authClear, authFail, authStart, authSuccess } from './actions'
import { authInitType, loginType, logoutType, registerType } from './types'
import axios from 'axios'

export function* loginSaga(action: loginType) {
    yield put(authStart())
    try {
        const response: {data: any} = yield axios.post('http://localhost:3001/sessions', {
            username: action.loginInput.username,
            password: action.loginInput.password,
        }, { withCredentials: true })
        yield put(authSuccess(response.data))
    } catch (error) {
        yield put(authFail(error.response.data.message))
    }
}

export function* registerSaga(action: registerType) {
    yield put(authStart())
    try {
        const response: {data: any} = yield axios.post('http://localhost:3001/registrations', {
            username: action.registerInput.username,
            password: action.registerInput.password,
            password_confirmation: action.registerInput.password_confirmation
        }, { withCredentials: true })
        yield put(authSuccess(response.data))
    } catch (error) {
        yield put(authFail(error.response.data.message))
    }
}

export function* authInitSaga(action: authInitType) {
    try {
        const response: {data: any} = yield axios.get('http://localhost:3001/logged_in', { withCredentials: true })
        if(response.data.logged_in) {
            yield put(authSuccess(response.data))
        } else {
            yield put(authFail())
        }
    } catch(error) {
        yield put(authFail(error.response.data.message))
    }
}

export function* logoutSaga(action: logoutType) {
    yield axios.delete('http://localhost:3001/logout', { withCredentials: true })

    yield put(authClear())
}
