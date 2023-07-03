import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { LoginScreen } from './LoginScreen';
import { BackgroundModal } from '../../components/BackgroundModal/BackgroundModal';

const LoginScreenMeta: ComponentMeta<typeof LoginScreen> = {
  title: 'Screens/Authentication/LoginScreen',
  component: LoginScreen,
  argTypes: {},
  args: {},
};

export default LoginScreenMeta;

type LoginScreenStory = ComponentStory<typeof LoginScreen>;

export const Basic: LoginScreenStory = () => (
  <BackgroundModal>
    <LoginScreen />
  </BackgroundModal>
);
