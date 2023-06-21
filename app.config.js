export default ({ config }) => ({
  ...config,
  name: 'saikai',
  slug: 'saikai',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.saikai',
    supportsTablet: true,
  },
  android: {
    googleServicesFile: './assets/google-services.json',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.saikai',
  },
  plugins: ['@react-native-firebase/app'],
  web: {
    favicon: './assets/favicon.png',
  },
});
