import React from 'react';

import Firebase, { FirebaseContext } from './util/firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import DashboardPage from './pages/Dashboard';
import LogInPage from './pages/Auth/LogInPage';
import SignUpPage from './pages/Auth/SignUpPage';

const Wrappers: React.FC = ({ children }) => (
  <BrowserRouter>
    <FirebaseContext.Provider value={Firebase}>
      <div className="App">
        { children }
      </div>
    </FirebaseContext.Provider>
  </BrowserRouter>
);

const App: React.FC = () => {
  return (
    <Wrappers>
      <Route path="/dashboard">
        <Navbar />
      </Route>
      <Switch>
        <Route path={["/", "/login"]} exact>
          <LogInPage />
        </Route>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Wrappers>
  );
};

export default App;
