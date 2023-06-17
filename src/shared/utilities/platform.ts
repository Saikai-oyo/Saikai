import { Platform } from 'react-native';

export const isWeb = () => Platform.OS === 'web';

export const isAndroid = () => Platform.OS === 'android';

export const isIOS = () => Platform.OS === 'ios';

export const isMobile = () =>
  Platform.OS === 'android' || Platform.OS === 'ios';
