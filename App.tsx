import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import React from 'react';

import { RootScreenNames, RootStackParamList } from './src/navigation/RootStackScreens';
import { EmailScreen } from './src/screens/ForgotPassword/Screens/EmailScreen';
import { PasswordScreen } from './src/screens/ForgotPassword/Screens/PasswordScreen';
import { Landing } from './src/screens/Landing/Landing';
import { LoginScreen } from './src/screens/Login/LoginScreen';

// eslint-disable-next-line no-console
console.log(
  '%c Welcome to Saikai!',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
);

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer documentTitle={{ enabled: false }}>
    <Stack.Navigator
      screenOptions={() => ({
        title: '',
        headerLeft: () => null,
        headerTransparent: true,
      })}
      initialRouteName={RootScreenNames.Landing}
    >
      <Stack.Group>
        <Stack.Screen name={RootScreenNames.Landing} key={RootScreenNames.Landing} component={Landing} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name={RootScreenNames.Login} key={RootScreenNames.Login} component={LoginScreen} />
        <Stack.Screen name={RootScreenNames.EmailScreen} key={RootScreenNames.EmailScreen} component={EmailScreen} />
        <Stack.Screen
          name={RootScreenNames.PasswordScreen}
          key={RootScreenNames.PasswordScreen}
          component={PasswordScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
);

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  AppEntryPoint = require('./.ondevice').default;
}

export default AppEntryPoint;
