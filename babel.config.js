module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'react-native-web',
        'module-resolver',
        {
          alias: {
            '^react-native$': 'react-native-web',
          },
        },
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['src/components/*/.*test.*/*'],
            '@components': './src/components',
          },
        },
      ],
    ],
  };
};
