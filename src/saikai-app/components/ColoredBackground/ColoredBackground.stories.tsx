import { Meta, StoryFn } from '@storybook/react';

import { ColoredBackground } from './ColoredBackground';

const meta: Meta<typeof ColoredBackground> = {
  title: 'Components/ColoredBackground',
  component: ColoredBackground,
  tags: ['autodocs'],
};
export default meta;

const Template: StoryFn<typeof ColoredBackground> = (args) => <ColoredBackground {...args} />;

export const Default = Template.bind({});
