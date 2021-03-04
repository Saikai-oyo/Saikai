import React from 'react';
import {
  Signup,
  Homepage,
  Login,
  Profile,
  ForgotPassword,
  UpdateProfile,
} from '../components';
import GlobalStore from '../contexts/GlobalStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../constants/PrivateRoute';

import * as S from './style';

function App() {
  return (
    <GlobalStore>
      <S.AppContainer>
        <S.SingUpWrapper className='d-flex align-item-center justify-content-center'>
          <S.SingUp>
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
          </S.SingUp>
        </S.SingUpWrapper>
      </S.AppContainer>
    </GlobalStore>
  );
}

export default App;
