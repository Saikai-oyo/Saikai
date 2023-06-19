module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }]],
  };
};
