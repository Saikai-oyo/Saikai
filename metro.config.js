/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver, watchFolders } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
    resolverMainFields: ['sbmodern', ...resolver.resolverMainFields],
  };

  config.watchFolders = [...watchFolders, './.ondevice'];

  return config;
})();
