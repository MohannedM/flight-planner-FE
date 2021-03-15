import { loginInputType, loginType, authDismissErrorType } from "../../../store/auth";

export interface LoginFormProps {
    loading: boolean
    username: string | null
    error?: string | null
    onLogin: (loginInput: loginInputType) => loginType
    onDismissError: () => authDismissErrorType
}