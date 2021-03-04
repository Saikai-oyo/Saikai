import React from 'react';
import Signup from './';

export default {
  title: 'Components/User/Signup',
  component: Signup,
};

const Story = (args) => {
  return <Signup {...args} />;
};

export const SignupStory = Story.bind({});
SignupStory.args = {};
