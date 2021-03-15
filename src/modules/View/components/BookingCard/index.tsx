import React from 'react'
import { BookingCardProps } from './types'
import {Link} from 'react-router-dom'

const BookingCard: React.FC<BookingCardProps> = props => {
    return (
        <div className="row mx-auto my-3" style={{ width: '100vh' }}>
            <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                    {props.pnr && <h5 className="card-title text-muted">{props.pnr}</h5>}
                    <h5 className="card-title">{props.plane_type} From {props.origin} to {props.destination} at {props.flight_date}</h5>
                    <Link to={props.viewFlightLink} className="card-link">View Flight</Link>
                </div>
            </div>
        </div>
    )
}

export default BookingCard