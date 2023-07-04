import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet } from 'react-native';

import { COLORS } from './src/constants/colors';
import {
  AuthenticationScreenNames,
  AuthenticationStackParamList,
} from './src/Navigation/Stacks/AuthenticationScreenNames';
import { HomepageScreenNames, HomepageStackParamList } from './src/Navigation/Stacks/HomepageScreenNames';
import { Landing } from './src/screens/Landing/Landing';
import { LoginScreen } from './src/screens/Login/LoginScreen';

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

const Stack = createNativeStackNavigator<AuthenticationStackParamList & HomepageStackParamList>();

const App = () => (
  <NavigationContainer documentTitle={{ enabled: false }}>
    <Stack.Navigator
      screenOptions={() => ({
        title: '',
        headerLeft: () => null,
        headerTransparent: true,
      })}
      initialRouteName={HomepageScreenNames.Landing}
    >
      <Stack.Group>
        <Stack.Screen name={HomepageScreenNames.Landing} key={HomepageScreenNames.Landing} component={Landing} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={AuthenticationScreenNames.Login}
          key={AuthenticationScreenNames.Login}
          component={LoginScreen}
        />
        {/* <Stack.Screen
          name={AuthenticationScreenNames.Register}
          key={AuthenticationScreenNames.Register}
          component={Register}
        />
        <Stack.Screen
          name={AuthenticationScreenNames.ForgotPassword}
          key={AuthenticationScreenNames.ForgotPassword}
          component={ForgotPassword}
        /> */}
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
