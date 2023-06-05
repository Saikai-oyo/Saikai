import { Meta, StoryFn } from '@storybook/react';

import { Login } from './Login';

const meta: Meta<typeof Login> = {
  title: 'components/Login',
  component: Login,
  tags: ['autodocs'],
};
export default meta;

const Template: StoryFn<typeof Login> = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
