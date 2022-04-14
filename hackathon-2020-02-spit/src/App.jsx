import React from 'react';

import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarLoginSignUp from './components/NavbarLoginSignUp';
import Login from './containers/Login/Login';
import SignUpPageDetails from './containers/SignUp/SignUpPageDetails';
import SignUpPageSelection from './containers/SignUp/SignUpPageSelection';
import Home from './containers/localfeed';
import RestaurantVolunteerPage from './containers/donation_info_page';
import DonationRequest from './containers/request_form';
import DonationTracker from './containers/request_track';
import Checkpoint from './containers/Checkpoint/Checkpoint';
import RestaurantDonationNearby from './containers/Restaurant/RestaurantDonationNearby'
import LeaderBoard from './containers/leader_board/LeaderBoard'
import UploadPost from './containers/leader_board/UploadPost';
import CheckpointCreate from './containers/Checkpoint/CheckpointCreate'
import SlumRequest from './containers/slum_request/SlumRequest';

/**
 * @type {React.FC}
 */
const AppProviders = ({ children }) => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </ApolloProvider>
);

/**
 * @type {React.FC}
 */
const App = () => {
  return (
    <AppProviders>
      <main className="App">
        <Switch>

          <Route exact path="/">
            <Navbar/>
            <Home />
          </Route>

          <Route exact path="/donation/request">
            <Navbar />
            <DonationRequest />
          </Route>

          <Route exact path='/donation/:donationRequestId' >
            <Navbar />
            <RestaurantVolunteerPage />
          </Route>

          <Route exact path="/tracker/:id">
            <Navbar />
            <DonationTracker />
          </Route>

          <Route exact path="/checkpoint">
            <Navbar />
            <Checkpoint />
          </Route>

          <Route exact path="/donation_request">
            <Navbar />
            <RestaurantDonationNearby />
          </Route>

          <Route exact path="/login">
            <NavbarLoginSignUp/>
            <Login />
          </Route>

          <Route exact path="/signup">
            <SignUpPageDetails />
          </Route>

          <Route exact path="/signup/selection">
            <SignUpPageSelection />
          </Route>

          <Route exact path="/profile">
            <Navbar />
            <LeaderBoard />
          </Route>

          <Route exact path="/create_checkpoint/">
            <Navbar />
            <CheckpointCreate />
          </Route>

          <Route exact path="/upload_post/">
            <Navbar />
            <UploadPost />
          </Route>

          <Route exact path="/slum_request">
            <Navbar />
            <SlumRequest />
          </Route>
        </Switch>
      </main>
    </AppProviders>
  );
};

export default App;
