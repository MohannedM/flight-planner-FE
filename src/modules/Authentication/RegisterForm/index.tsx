import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Dispatch } from 'redux'
import { authDismissError, authState, register, registerInputType } from '../../../store/auth'
import CustomModal from '../../View/components/CustomModal'
import TextInput from '../../View/components/Form/TextInput'
import { RegisterFormProps } from './types'

const RegisterForm: React.FC<RegisterFormProps> = (props) => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    })

    const onItemChange = (value: any, item: string | number) => setUserData(preValue => ({ ...preValue, [item]: value }))
    if (props.username) return <Redirect to="/" />
    return (
        <div className="w-50 mx-auto">
            <CustomModal show={!!props.error} body={props.error} handleClose={props.onDismissError} error/>
            <div className="my-5">
                <h2 className="text-primary text-uppercase">Create a New Account</h2>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextInput label='username' value={userData.username} onChange={(event: any) => onItemChange(event.target.value, 'username')} />
                <TextInput type="password" label='password' value={userData.password} onChange={(event: any) => onItemChange(event.target.value, 'password')} />
                <TextInput type="password" label='Confirm Password' value={userData.password_confirmation} onChange={(event: any) => onItemChange(event.target.value, 'password_confirmation')} />
                <button className="btn btn-primary mt-3" onClick={() => props.onRegister(userData)} disabled={props.loading}>Register {props.loading && <div className="spinner-border spinner-border-sm" role="status"></div>}</button>
            </form>
            <p className="mt-3">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

const mapStateToProps = (state: {auth: authState}) => {
    return {
        username: state.auth.username,
        loading: state.auth.loading,
        error: state.auth.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onRegister: (registerInput: registerInputType) => dispatch(register(registerInput)),
        onDismissError: () => dispatch((authDismissError())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)