import React from 'react'
import { FlightCardProps } from './types'
import {Link} from 'react-router-dom'

const FlightCard: React.FC<FlightCardProps> = props => {
    return (
        <div className="col-md-4 my-3">
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">Flight Date: {props.flight_date}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Seats Count: {props.seat_count}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Reserved Seats: {props.reserved_seats}</h6>
                <p className="card-text">{props.plane_type} From {props.origin} to {props.destination}</p>
                <Link to={props.viewFlightLink} className="card-link">View Flight</Link>
            </div>
        </div>
    </div>
    )
}

export default FlightCard