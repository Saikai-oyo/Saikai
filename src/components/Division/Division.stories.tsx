import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';

import { Division } from './Division';

const DivisionMeta: ComponentMeta<typeof Division> = {
  title: 'Division',
  component: Division,
  argTypes: {},
  args: {},
};

export default DivisionMeta;

type DivisionStory = ComponentStory<typeof Division>;

export const Basic: DivisionStory = () => <Division />;
export const WithText: DivisionStory = () => <Division text="Or" />;
