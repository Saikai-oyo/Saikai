import { getDefaultConfig } from 'expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields = ['sbmodern', ...defaultConfig.resolver.resolverMainFields];

defaultConfig.transformer.getTransformOptions = () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [...defaultConfig.watchFolders, './.ondevice'];

export default defaultConfig;
