import React from 'react';
import Profile from './';

export default {
  title: 'Components/User/Profile',
  component: Profile,
};

const Story = (args) => {
  return <Profile {...args} />;
};

export const ProfileStory = Story.bind({});
ProfileStory.args = {};
