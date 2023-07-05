export const parameters = {
  background: {
    default: '#F2F4F7',
    values: [
      { name: 'white', value: '#FFFFFF' },
      { name: 'black', value: '#000000' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
