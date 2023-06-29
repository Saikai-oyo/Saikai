module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [['inline-react-svg'], ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }]],
  };
};
