import React from 'react';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';

import Homepage from './Dashboard/Homepage/Homepage';
import Profile from './User/Profile/Profile';
import UpdateProfile from './User/UpdateProfile/UpdateProfile';

import GlobalStore from '../contexts/GlobalStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../constants/PrivateRoute';

function App() {
  return (
    <GlobalStore>
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <PrivateRoute exact path='/' component={Homepage} />
            <div className='container d-flex align-items-center justify-content-center'>
              <div className='w-100' style={{ maxWidth: '400px' }}>
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <PrivateRoute path='/profile' component={Profile} />
                <PrivateRoute
                  path='/update-profile'
                  component={UpdateProfile}
                />
              </div>
            </div>
          </Switch>
        </Router>
      </>
    </GlobalStore>
  );
}

export default App;
