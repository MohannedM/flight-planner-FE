import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom'
import { Dispatch } from 'redux';
import MainLayout from '../modules/View/Layout/MainLayout'
import { authInit, authInitType, authState } from '../store/auth';
import AddFlightPage from './AddFlightPage';
import AdminDashboardPage from './AdminDashboardPage'
import PassengerDashboardPage from './PassengerDashboardPage'
import BookFlightPage from './BookFlightPage'
import LandingPage from './LandingPage'
import Login from './Login';
import LogoutPage from './Logout';
import NotFoundPage from './NotFoundPage';
import Register from './Register'
import Spinner from '../modules/View/components/Spinner'
import ViewFlightPage from './ViewFlightPage';

interface PageProps {
  isLoggedIn: boolean
  isAdmin: boolean
  authChecking: boolean
  onAuthInit: () => authInitType
}

const Pages: React.FC<PageProps> = ({ isLoggedIn, onAuthInit, isAdmin, authChecking }) =>  {
  useEffect(() => {
        onAuthInit()
  }, [onAuthInit])

  if (authChecking) return <Spinner />

  return (
  <MainLayout isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
    <Switch>

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={LogoutPage} />

          {isLoggedIn && <Route path="/flights/:flight_id" component={ViewFlightPage} />}
          {(isLoggedIn && isAdmin) && <Route path="/add-flight" component={AddFlightPage} />}
          {(isLoggedIn && !isAdmin) && <Route path="/book-flight" component={BookFlightPage} />}
          {!isLoggedIn && <Route path="/" exact component={LandingPage} />}
          {(isLoggedIn && isAdmin) && <Route path="/" exact component={AdminDashboardPage} />}
          {(isLoggedIn && !isAdmin) && <Route path="/" exact component={PassengerDashboardPage} />}

          <Route path="/" component={NotFoundPage} />

    </Switch>
  </MainLayout>
  )
}


const mapStateToProps = (state: {auth: authState} ) => {
  return {
    isLoggedIn: !!state.auth.username,
    isAdmin: !!state.auth.is_admin,
    authChecking: state.auth.authChecking,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAuthInit: () => dispatch(authInit()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pages))
