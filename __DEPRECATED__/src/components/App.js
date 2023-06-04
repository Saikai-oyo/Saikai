import React, { useEffect } from 'react';
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
import { useTranslation } from 'react-i18next';

const wrapper = {
    display: ' flex',
    flexDirection: ' column',
    justifyContent: ' space-between',
    height: '100vh',
};

function App() {
    const { i18n } = useTranslation();
    const appDirection = i18n.dir();

    useEffect(() => {
        document.body.dir = appDirection;
    }, [i18n, appDirection]);
    return (
        <GlobalStore>
            <div style={wrapper}>
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <PrivateRoute exact path="/" component={Homepage} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                        <Route path="/forgot-password" component={ForgotPassword} />
                        <PrivateRoute path="/profile" component={Profile} />
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        </GlobalStore>
    );
}

export default App;
