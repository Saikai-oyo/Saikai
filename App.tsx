import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from './src/constants/colors';
import { AuthenticationStackConfiguration } from './src/Navigation/Stacks/Authentication';
import { HomepageStackConfiguration } from './src/Navigation/Stacks/Homepage';

// eslint-disable-next-line no-console
console.log(
  '%c Welcome to Saikai!',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
  },
  containerStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Homepage">
      <Stack.Group>
        <Stack.Screen {...HomepageStackConfiguration.Homepage} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen {...AuthenticationStackConfiguration.Login} />
        <Stack.Screen {...AuthenticationStackConfiguration.Register} />
        <Stack.Screen {...AuthenticationStackConfiguration.ForgotPassword} />
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
