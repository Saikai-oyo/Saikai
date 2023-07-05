export enum RootScreenNames {
  // Landing
  Landing = 'Landing',

  //   Auth
  Login = 'Login',
  Register = 'Register',

  // ForgotPassword
  EmailScreen = 'Email',
  // PasswordScreen = 'Password',
}

export type RootStackParamList = {
  // Landing
  [RootScreenNames.Landing]: undefined;

  //   Auth
  [RootScreenNames.Login]: undefined;
  [RootScreenNames.Register]: undefined;

  // ForgotPassword
  [RootScreenNames.EmailScreen]: undefined;
  // [RootScreenNames.PasswordScreen]: undefined;
};
