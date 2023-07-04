export enum AuthenticationScreenNames {
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
}

export type AuthenticationStackParamList = {
  [AuthenticationScreenNames.Login]: undefined;
  [AuthenticationScreenNames.Register]: undefined;
  [AuthenticationScreenNames.ForgotPassword]: undefined;
};
