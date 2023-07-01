import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { BackgroundModal } from './BackgroundModal';

const BackgroundModalMeta: ComponentMeta<typeof BackgroundModal> = {
  title: 'BackgroundModal',
  component: BackgroundModal,
  argTypes: {},
  args: {},
};

export default BackgroundModalMeta;

type BackgroundModalStory = ComponentStory<typeof BackgroundModal>;

export const Basic: BackgroundModalStory = () => <BackgroundModal>Some text with background</BackgroundModal>;
