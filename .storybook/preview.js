import { COLORS } from '../src/constants/colors';

export const parameters = {
  background: {
    default: COLORS.gray100,
    values: [
      { name: 'white', value: COLORS.white },
      { name: 'black', value: COLORS.black },
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
