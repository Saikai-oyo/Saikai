import React from 'react';
import ForgotPassword from './';

export default {
  title: 'Components/User/ForgotPassword',
  component: ForgotPassword,
};

const Story = (args) => <ForgotPassword {...args} />;

export const ForgotPasswordStory = Story.bind({});
ForgotPasswordStory.args = {};
