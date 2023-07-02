import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Icon } from './Icon';

const IconMeta: ComponentMeta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};

export default IconMeta;

type IconStory = ComponentStory<typeof Icon>;

export const Facebook: IconStory = (args) => <Icon {...args} type="facebook" />;
export const Mail: IconStory = (args) => <Icon {...args} type="mail" />;
export const Google: IconStory = (args) => <Icon {...args} type="google" />;
export const Linkedin: IconStory = (args) => <Icon {...args} type="linkedin" />;
