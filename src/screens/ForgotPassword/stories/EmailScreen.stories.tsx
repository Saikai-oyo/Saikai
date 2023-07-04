import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { RootScreenNames, RootStackParamList } from '../../../navigation/Stacks/RootStackScreens';
import { EmailScreen } from '../Screens/EmailScreen';

const EmailScreenMeta: ComponentMeta<typeof EmailScreen> = {
  title: 'Screens/Forgot Password/EmailScreen',
  component: EmailScreen,
  argTypes: {},
  args: {},
};

export default EmailScreenMeta;

type EmailScreenStory = ComponentStory<typeof EmailScreen>;

export const Basic: EmailScreenStory = () => (
  <EmailScreen
    navigation={{} as NativeStackNavigationProp<RootStackParamList, RootScreenNames.ForgotPassword_EmailScreen>}
    route={{} as RouteProp<RootStackParamList, RootScreenNames.ForgotPassword_EmailScreen>}
  />
);
