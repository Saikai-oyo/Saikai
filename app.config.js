export default ({ config }) => ({
  ...config,
  name: 'Saikai',
  slug: 'Saikai',
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
    supportsTablet: true,
    bundleIdentifier: 'com.eidan66.saikai',
  },
  android: {
    package: 'com.eidan66.saikai',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
    },
  },
  web: {
    favicon: './assets/vector_logo.png',
    bundler: 'metro',
  },
});
