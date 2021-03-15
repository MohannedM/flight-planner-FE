import { authDismissErrorType, registerInputType, registerType, } from "../../../store/auth";

export interface RegisterFormProps {
    error?: string | null
    username: string | null
    loading: boolean
    onRegister: (registerInput: registerInputType) => registerType
    onDismissError: () => authDismissErrorType
}