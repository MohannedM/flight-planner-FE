import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import TextInput from '../../View/components/Form/TextInput'
import { Form } from 'react-bootstrap'
import { AddFlightProps } from './types'
import CustomModal from '../../View/components/CustomModal'
import { createFlight, flightDismissError, flightInputType, flightsState } from '../../../store/flights'
import { Redirect } from 'react-router'

const AddFlight: React.FC<AddFlightProps> = props => {
    const [flightData, setFlightData] = useState({
        plane_type: '',
        origin: '',
        destination: '',
        seat_count: 0,
        flight_date: '',
    })

    const onItemChange = (value: any, item: string | number) => setFlightData(preValue => ({ ...preValue, [item]: value }))
    return (
        <div className="w-50 mx-auto">
        <CustomModal show={!!props.error} body={props.error} handleClose={props.onDismissError} error/>
        {props.redirect && <Redirect to="/" />}
            <div className="my-5">
                <h2 className="text-primary text-uppercase">Add A New Flight</h2>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <TextInput label='Plane Type' value={flightData.plane_type} onChange={(event: any) => onItemChange(event.target.value, 'plane_type')} />
                <TextInput label='origin' value={flightData.origin} onChange={(event: any) => onItemChange(event.target.value, 'origin')} />
                <TextInput label='destination' value={flightData.destination} onChange={(event: any) => onItemChange(event.target.value, 'destination')} />
                <TextInput label='Seat Count' type={'number'} value={flightData.seat_count} onChange={(event: any) => onItemChange(event.target.value, 'seat_count')} />
                <Form.Control type="date" value={flightData.flight_date} name='flight_date' onChange={(event: any) => onItemChange(event.target.value, 'flight_date')} />
                <button className="btn btn-primary mt-3" onClick={() => props.onAddFlight(flightData)} disabled={props.loading}>Add Flight {props.loading && <div className="spinner-border spinner-border-sm" role="status"></div>}</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state: {flights: flightsState}) => {
    return {
        loading: state.flights.loading,
        redirect: state.flights.redirect,
        error: state.flights.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddFlight: (flightInput: flightInputType) => dispatch(createFlight(flightInput)),
        onDismissError: () => dispatch((flightDismissError())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFlight)
