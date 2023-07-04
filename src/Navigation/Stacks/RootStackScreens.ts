export enum RootScreenNames {
  // Landing
  Landing = 'Landing',

  //   Auth
  Login = 'Login',
  Register = 'Register',

  // ForgotPassword
  ForgotPassword_EmailScreen = 'Email',
  ForgotPassword_PasswordScreen = 'Password',
}

export type RootStackParamList = {
  // Landing
  [RootScreenNames.Landing]: undefined;

  //   Auth
  [RootScreenNames.Login]: undefined;
  [RootScreenNames.Register]: undefined;
  [RootScreenNames.ForgotPassword_EmailScreen]: undefined;
  [RootScreenNames.ForgotPassword_PasswordScreen]: undefined;
};
