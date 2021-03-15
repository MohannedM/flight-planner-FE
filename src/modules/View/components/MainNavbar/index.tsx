import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainNavbarProps } from './types';

const MainNavbar: React.FC<MainNavbarProps> = ({isLoggedIn, isAdmin}) => (
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <Link to="/" className="text-secondary font-weight-bold navbar-brand"> <FontAwesomeIcon icon={faPlane} /> FlightPlanner </Link>
      <Nav className="ml-auto">
    {!isLoggedIn && <React.Fragment>
       <Link to="/register" className="text-secondary nav-link">
        Register
        </Link>
        <Link to="/login" className="text-secondary nav-link">
        Login
        </Link>
      </React.Fragment> }
      {(isLoggedIn && isAdmin) &&
       <Link to="/add-flight" className="text-secondary nav-link">
        Add Flight
        </Link> }
        {(isLoggedIn && !isAdmin) &&
       <Link to="/book-flight" className="text-secondary nav-link">
        Book Flight
        </Link> }
      {isLoggedIn &&
       <Link to="/logout" className="text-secondary nav-link">
        logout
        </Link>
       }
       </Nav>
    </div>
  </nav>
)


export default MainNavbar