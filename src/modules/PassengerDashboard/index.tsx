import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { flightDismissError, flightsState } from '../../store/flights';
import { getBookedFlights } from '../../store/flights/actions';
import BookingCard from '../View/components/BookingCard';
import CustomModal from '../View/components/CustomModal';
import Spinner from '../View/components/Spinner';
import { PassengerDashboardProps } from './types';

const PassengerDashboard: React.FC<PassengerDashboardProps> = ({loading, flights, onGetFlights, error, onDismissError}) => {
    useEffect(() => {
        onGetFlights()
    }, []) //eslint-disable-line
    if (loading) return <Spinner />
    return (
        <React.Fragment>
            <CustomModal show={!!error} body={error} handleClose={onDismissError} error/>
            <div className="container my-5 text-center">
                <h2 className="text-center">{flights.length ? 'Your Upcoming Flights' : 'You Have No Upcoming Flights'}</h2>

                {flights.map(flight => <BookingCard key={flight.id} {...flight} viewFlightLink={`/flights/${flight.id}`} />)}

            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state: {flights: flightsState}) => {
    return {
        flights: state.flights.bookedFlights,
        loading: state.flights.loading,
        error: state.flights.error,
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onGetFlights: () => dispatch(getBookedFlights()),
        onDismissError: () => dispatch(flightDismissError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerDashboard)