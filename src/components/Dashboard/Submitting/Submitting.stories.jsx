import React from 'react';
import Submitting from './';

export default {
  title: 'Components/Dashboard/Submitting',
  components: Submitting,
};

const Story = (args) => <Submitting {...args} />;

export const SubmittingStory = Story.bind({});
SubmittingStory.args = {
  company_name: 'Dora international',
};
