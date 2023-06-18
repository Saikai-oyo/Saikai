import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/__DEPRECATED__/'],
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
  ],
};

export default config;
