import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { RootScreenNames, RootStackParamList } from '../../../navigation/RootStackScreens';
import { PasswordScreen } from '../Screens/PasswordScreen';

const PasswordScreenMeta: ComponentMeta<typeof PasswordScreen> = {
  title: 'Screens/Forgot Password/Password Screen',
  component: PasswordScreen,
  argTypes: {},
  args: {},
};

export default PasswordScreenMeta;

type PasswordScreenStory = ComponentStory<typeof PasswordScreen>;

export const Basic: PasswordScreenStory = () => (
  <PasswordScreen
    navigation={{} as NativeStackNavigationProp<RootStackParamList, RootScreenNames.PasswordScreen>}
    route={{} as RouteProp<RootStackParamList, RootScreenNames.PasswordScreen>}
  />
);
