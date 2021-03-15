import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { BookFlightProps } from './types'
import CustomModal from '../../View/components/CustomModal'
import { bookFlight, flightDismissError, flightsState, getAdminFlights } from '../../../store/flights'
import Select from '../../View/components/Form/Select'

const BookFlight: React.FC<BookFlightProps> = props => {
    useEffect(() => {
        props.onGetFlights()
    }, []) //eslint-disable-line
    const [flightData, setFlightData] = useState({
        flight_id: '',
    })
    const bookingOptions = props.flights.map(flight => {
        return {
            id: flight.id,
            value: `${flight.origin} to ${flight.destination} at ${flight.flight_date}`,
        }
    })
    const onItemChange = (value: any, item: string | number) => setFlightData(preValue => ({ ...preValue, [item]: value }))
    return (
        <div className="w-50 mx-auto">
            {props.redirect && <Redirect to="/" />}
        <CustomModal show={!!props.error} body={props.error} handleClose={props.onDismissError} error/>
            <div className="my-5">
                <h2 className="text-primary text-uppercase">Book A New Flight</h2>
            </div>
            <form onSubmit={(event) => event.preventDefault()}>
                <Select label='Flights' options={bookingOptions} selectTitle="booking" value={flightData.flight_id} onChange={(event: any) => onItemChange(event.target.value, 'flight_id')} />
                <button className="btn btn-primary mt-3" onClick={() => props.onBookFlight(flightData.flight_id)} disabled={(props.loading || !flightData.flight_id)}>Book Flight {props.loading && <div className="spinner-border spinner-border-sm" role="status"></div>}</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state: {flights: flightsState}) => {
    return {
        flights: state.flights.flights,
        redirect: state.flights.redirect,
        loading: state.flights.loading,
        error: state.flights.error,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onGetFlights: () => dispatch(getAdminFlights()),
        onBookFlight: (flight_id: string) => dispatch(bookFlight(flight_id)),
        onDismissError: () => dispatch((flightDismissError())),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFlight)
