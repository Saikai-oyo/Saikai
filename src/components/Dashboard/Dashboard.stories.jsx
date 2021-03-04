import React from 'react';
import Dashboard from './';

export default {
  title: 'Components/Dashboard',
  component: Dashboard,
};

const Story = (args) => <Dashboard {...args} />;

export const DashboardStory = Story.bind({});
DashboardStory.args = {};
