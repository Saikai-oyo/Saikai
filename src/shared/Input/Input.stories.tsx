import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Input } from './Input';

const InputMeta: ComponentMeta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {},
  args: {},
};

export default InputMeta;

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => <Input placeholder="Hello Input" {...args} />;
export const WithLabel: InputStory = (args) => <Input label="im label!" placeholder="With label" {...args} />;
export const Disabled: InputStory = (args) => <Input disabled placeholder="With label" {...args} />;
export const Error: InputStory = (args) => <Input error="bla bla" placeholder="With label" {...args} />;
export const Icon: InputStory = (args) => <Input iconType="mail" placeholder="With label" {...args} />;
export const IconWithSplit: InputStory = (args) => (
  <Input iconWithSplit iconType="mail" placeholder="With label" {...args} />
);
export const Password: InputStory = (args) => (
  <Input iconType="lock" label="Password" placeholder="Password" secureTextEntry {...args} />
);
