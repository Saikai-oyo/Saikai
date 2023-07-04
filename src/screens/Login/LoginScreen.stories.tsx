import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { LoginScreen } from './LoginScreen';
import { RootScreenNames, RootStackParamList } from '../../navigation/Stacks/RootStackScreens';

const LoginScreenMeta: ComponentMeta<typeof LoginScreen> = {
  title: 'Screens/Authentication/LoginScreen',
  component: LoginScreen,
  argTypes: {},
  args: {},
};

export default LoginScreenMeta;

type LoginScreenStory = ComponentStory<typeof LoginScreen>;

export const Basic: LoginScreenStory = () => (
  <LoginScreen
    navigation={{} as NativeStackNavigationProp<RootStackParamList, RootScreenNames.Login>}
    route={{} as RouteProp<RootStackParamList, RootScreenNames.Login>}
  />
);
