import React from 'react';
import ForgotPassword from './Auth/ForgotPassword/ForgotPassword';
import Login from './Auth/Login/Login';
import Signup from './Auth/Signup/Signup';
import Footer from './Footer/Footer';
import Homepage from './Dashboard/Homepage/Homepage';
import Profile from './User/Profile/Profile';
import UpdateProfile from './User/UpdateProfile/UpdateProfile';

import GlobalStore from '../contexts/GlobalStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../constants/PrivateRoute';

const wrapper = {
  display: ' flex',
  flexDirection: ' column',
  justifyContent: ' space-between',
};

function App() {
  return (
    <GlobalStore>
      <div style={wrapper}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <PrivateRoute exact path='/' component={Homepage} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/update-profile' component={UpdateProfile} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </GlobalStore>
  );
}

export default App;
