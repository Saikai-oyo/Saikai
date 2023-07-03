import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { IconButton } from './IconButton';

const IconButtonMeta: ComponentMeta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {},
  args: {},
};

export default IconButtonMeta;

type IconButtonStory = ComponentStory<typeof IconButton>;

export const Basic: IconButtonStory = () => <IconButton type="linkedin" />;
