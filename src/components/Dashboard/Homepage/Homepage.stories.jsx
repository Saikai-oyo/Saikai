import React from 'react';
import Homepage from '.';

export default {
  title: 'Components/Dashboard/Homepage',
  component: Homepage,
};

const Story = (args) => <Homepage {...args} />;

export const HomepageStory = Story.bind({});
HomepageStory.args = {};
