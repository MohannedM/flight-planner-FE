import {
    AUTH_CLEAR,
    AUTH_DISMISS_ERROR,
    AUTH_FAIL,
    AUTH_START,
    AUTH_SUCCESS,
} from "./actionTypes";
import { authState, authAction } from "./types";

const initialState: authState = {
    username: null,
    id: null,
    is_admin: null,
    error: null,
    loading: false,
    authChecking: true,
}

const reducer: (state: authState, action: authAction) => authState = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                id: action.authData.user.id,
                is_admin: action.authData.user.is_admin,
                username: action.authData.user.username,
                loading: false,
                authChecking: false,
            }
        case AUTH_FAIL:
            return {
                ...state,
                loading: false,
                authChecking: false,
                error: action.error,
            }
        case AUTH_DISMISS_ERROR:
            return {
                ...state,
                error: null
            }
        case AUTH_CLEAR:
            return {
                ...state,
                username: null,
                id: null,
                is_admin: null,
            }
        default: return state
    }
}

export { reducer as authReducer }