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
export const Github: IconStory = (args) => <Icon {...args} type="github" />;
export const Google: IconStory = (args) => <Icon {...args} type="google" />;
export const Linkedin: IconStory = (args) => <Icon {...args} type="linkedin" />;
