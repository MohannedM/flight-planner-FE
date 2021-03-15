import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { flightDismissError, flightsState, getAdminFlights } from '../../store/flights';
import CustomModal from '../View/components/CustomModal';
import FlightCard from '../View/components/FlightCard';
import Spinner from '../View/components/Spinner';
import { AdminDashboardProps } from './types';

const AdminDashboard: React.FC<AdminDashboardProps> = ({loading, flights, onGetFlights, error, onDismissError}) => {
    useEffect(() => {
        onGetFlights()
    }, []) //eslint-disable-line
    if (loading) return <Spinner />
    return (
        <React.Fragment>
            <CustomModal show={!!error} body={error} handleClose={onDismissError} error/>
            <div className="container my-5 text-center">
            <div className="row">
                {flights.map(flight => <FlightCard key={flight.id} {...flight} viewFlightLink={`/flights/${flight.id}`} />)}
            </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: {flights: flightsState}) => {
    return {
        flights: state.flights.flights,
        loading: state.flights.loading,
        error: state.flights.error,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onGetFlights: () => dispatch(getAdminFlights()),
        onDismissError: () => dispatch(flightDismissError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard)