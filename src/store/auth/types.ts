import {
    AUTH_DISMISS_ERROR,
    LOGIN,
    REGISTER,
    AUTH_INIT,
    AUTH_START,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
    AUTH_CLEAR,
} from './actionTypes'

export interface loginInputType {
    username: string
    password: string
}

export interface registerInputType {
    username: string
    password: string
    password_confirmation: string
}


export interface authDataType {
    logged_in: boolean
    user: {
        id: string
        username: string
        is_admin: boolean | null
        created_at: string
        updated_at: string
    }
}

export interface loginType {
    type: typeof LOGIN
    loginInput: loginInputType,
}

export interface registerType {
    type: typeof REGISTER
    registerInput: registerInputType,
}

export interface authInitType {
    type: typeof AUTH_INIT
}

export interface logoutType {
    type: typeof LOGOUT
}

export interface authClearType {
    type: typeof AUTH_CLEAR
}


export interface authStartType {
    type: typeof AUTH_START
}

export interface authFailType {
    type: typeof AUTH_FAIL
    error?: string
}

export interface authSuccessType {
    type: typeof AUTH_SUCCESS
    authData: authDataType
}

export interface authDismissErrorType {
    type: typeof AUTH_DISMISS_ERROR
}

export interface authState {
    id: string | null
    username: string | null
    is_admin: boolean | null
    loading: boolean
    authChecking: boolean
    error?: string | null
}

export type authAction =
loginType | registerType | authStartType |
authSuccessType | authFailType |  authDismissErrorType |
logoutType | authClearType | authInitType