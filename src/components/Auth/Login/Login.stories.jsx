import React from 'react';
import Login from './';

export default {
  title: 'Components/User/Login',
  component: Login,
};

const Story = (args) => <Login {...args} />;

export const LoginStory = Story.bind({});
LoginStory.args = {};
