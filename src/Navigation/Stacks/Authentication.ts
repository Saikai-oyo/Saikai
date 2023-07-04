import { LoginScreen } from '../../screens/Login/LoginScreen';

export const AuthenticationStackConfiguration = {
  Login: {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  Register: {
    name: 'Register',
    // TODO: Update to Register screen
    component: LoginScreen,
    options: { headerShown: false },
  },
  ForgotPassword: {
    name: 'ForgotPassword',
    // TODO: Update to Forgot Password screen
    component: LoginScreen,
    options: { headerShown: false },
  },
};
