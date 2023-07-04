export enum RootScreenNames {
  // Landing
  Landing = 'Landing',

  //   Auth
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'ForgotPassword',
}

export type RootStackParamList = {
  // Landing
  [RootScreenNames.Landing]: undefined;

  //   Auth
  [RootScreenNames.Login]: undefined;
  [RootScreenNames.Register]: undefined;
  [RootScreenNames.ForgotPassword]: undefined;
};
