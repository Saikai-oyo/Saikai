import React from 'react';
import UpdateProfile from './';

export default {
  title: 'Components/User/UpdateProfile',
  component: UpdateProfile,
};

const Story = (args) => {
  return <UpdateProfile {...args} />;
};

export const UpdateProfileStory = Story.bind({});
UpdateProfileStory.args = {};
