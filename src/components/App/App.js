import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from '../../routes/LandingPage/LandingPage';
import PrivateRoute from '../../utilities/PrivateRoute';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import PublicOnlyRoute from '../../utilities/PublicOnlyRoute';
import Header from '../Header/Header';
import HomePage from '../../routes/HomePage/HomePage';
import TripsPage from '../../routes/TripsPage/TripsPage';
import TripPlansPage from '../../routes/TripPlansPage/TripPlansPage';
import AddTrips from '../../routes/AddTrip/AddTrip'

import TokenService from '../../services/token-service';
import Footer from '../Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(TokenService.hasAuthToken());

  function whenLoggedIn() {
    setIsLoggedIn(true);
  }

  function whenLoggedOut() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header" id='myHeader'>
        <Header
          whenLoggedOut={whenLoggedOut}
          isLoggedIn={isLoggedIn}
        />
      </header>
      <main>
        <Switch>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <PublicOnlyRoute
            path='/Login'
            component={LoginPage}
            whenLoggedIn={whenLoggedIn}
          />
          <PublicOnlyRoute
            path='/Register'
            component={RegistrationPage}
          />
          <PrivateRoute
            path='/Home'
            component={HomePage}
          />
          <PrivateRoute
            path='/MyTrips'
            component={TripsPage} />
          <PrivateRoute
            path='/Trips/:tripId'
            component={TripPlansPage}
          />
          
          <PrivateRoute
            path='/Add'
            component={AddTrips}
            searchType='Add'
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div >
  );
}

export default App;
