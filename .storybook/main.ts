import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/react-vite';

module.exports = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/saikai-app/components'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  core: {
    builder: '@storybook/builder-vite',
    // we don't want to muck up the data when we're working on the builder
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
} as StorybookConfig;
