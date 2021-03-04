import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import GlobalStore from '../src/contexts/GlobalStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

addDecorator((story) => (
  <GlobalStore>
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  </GlobalStore>
));
