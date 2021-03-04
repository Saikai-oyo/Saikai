import React from 'react';
import {
  Signup,
  Login,
  Homepage,
  Profile,
  ForgotPassword,
  UpdateProfile,
} from '../components';
import GlobalStore from '../contexts/GlobalStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../constants/PrivateRoute';

function App() {
  return (
    <GlobalStore>
      <>
        <div className='container d-flex align-item-center justify-content-center'>
          <div className='w-100' style={{ maxWidth: '400px' }}>
            <Router>
              <Switch>
                <PrivateRoute exact path='/' component={Homepage} />
                <Route path='/signup' component={Signup} />
                <Route path='/login' component={Login} />
                <Route path='/forgot-password' component={ForgotPassword} />
                <PrivateRoute path='/profile' component={Profile} />
                <PrivateRoute
                  path='/update-profile'
                  component={UpdateProfile}
                />
              </Switch>
            </Router>
          </div>
        </div>
      </>
    </GlobalStore>
  );
}

export default App;
