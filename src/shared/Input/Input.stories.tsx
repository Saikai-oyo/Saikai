import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Input } from './Input';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {},
  args: {
    placeholder: 'Hello Input',
  },
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => <Input {...args} />;
export const WithLabel: InputStory = (args) => <Input label="im label!" {...args} />;
export const Password: InputStory = (args) => <Input label="Password" secureTextEntry {...args} />;
