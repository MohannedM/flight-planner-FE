import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Dispatch } from 'redux'
import { deleteFlight, flightDismissError, flightsState, getFlight } from '../../../store/flights'
import NotFound from '../../NotFound'
import CustomModal from '../../View/components/CustomModal'
import Spinner from '../../View/components/Spinner'
import { ViewFlightProps } from './types'
import { withRouter } from 'react-router-dom'
import { authState } from '../../../store/auth'

const ViewFlight: React.FC<ViewFlightProps> = (props) => {
    useEffect(() => {
        props.onGetFlight(props.match.params.flight_id)
    },[]) // eslint-disable-line
    const deleteFlightTrigger = () => {
        const deleteFlightAnswer = confirm('Are you sure you want to delete this flight?') // eslint-disable-line
        if(deleteFlightAnswer) {
            props.onDeleteFlight(props.match.params.flight_id)
        }
    }
    if (props.loading) return <Spinner />
    if (!props.flight) return <NotFound />
    return (
        <React.Fragment>
            {props.redirect && <Redirect to="/" />}
            <CustomModal show={!!props.error} body={props.error} handleClose={props.onDismissError} error/>
            <div className="container my-5 text-center">
                    <div className="body">
                        <h3>{props.flight.plane_type} From {props.flight.origin} to {props.flight.destination} <small className="text-muted">Flight Date: {props.flight.flight_date}</small></h3>
                        <hr className="my-3" />
                        <h5 className="mb-2 text-secondary">Seats Count: {props.flight.seat_count}</h5>
                        <h5 className="mb-2 text-secondary">Reserved Seats: {props.flight.reserved_seats}</h5>
                        {props.isAdmin && <button className="btn btn-danger" onClick={deleteFlightTrigger}>Delete Flight</button>}
                    </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: {flights: flightsState, auth: authState }) => {
    return {
        loading: state.flights.loading,
        flight: state.flights.flight,
        redirect: state.flights.redirect,
        error: state.flights.error,
        isAdmin: state.auth.is_admin,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onGetFlight: (flight_id: string) => dispatch(getFlight(flight_id)),
        onDeleteFlight: (flight_id: string) => dispatch(deleteFlight(flight_id)),
        onDismissError: () => dispatch(flightDismissError()),
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewFlight))