module.exports = {
  stories: [
    '../src/shared/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/screens/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-react-native-web'],
  core: {
    builder: 'webpack5',
  },
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias['@react-navigation/native'] = '<rootDir>/__mocks__/react-navigation.js';
    return config;
  },
};
