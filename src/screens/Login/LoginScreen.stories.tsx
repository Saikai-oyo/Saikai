import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { LoginScreen } from './LoginScreen';
import { BackgroundModal } from '../../components/BackgroundModal/BackgroundModal';
import { RootScreenNames, RootStackParamList } from '../../Navigation/Stacks/RootStackScreens';

// Define the component meta for Storybook
const LoginScreenMeta: ComponentMeta<typeof LoginScreen> = {
  title: 'Screens/Authentication/LoginScreen',
  component: LoginScreen,
  argTypes: {},
  args: {},
};

export default LoginScreenMeta;

// Define the story
type LoginScreenStory = ComponentStory<typeof LoginScreen>;

export const Basic: LoginScreenStory = () => (
  <BackgroundModal>
    <LoginScreen
      navigation={{} as NativeStackNavigationProp<RootStackParamList, RootScreenNames.Login>}
      route={{} as RouteProp<RootStackParamList, RootScreenNames.Login>}
    />
  </BackgroundModal>
);
