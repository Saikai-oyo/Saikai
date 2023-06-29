import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { TShirtSize } from '../../types/T-Shirt-size';

type TShirtToStyle = Record<string, StyleProp<TextStyle | ViewStyle>>;

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 20,
  },
  [TShirtSize.XS]: {
    fontSize: 14,
  },
  [TShirtSize.S]: {
    fontSize: 14,
  },
  [TShirtSize.M]: {
    fontSize: 30,
  },
  [TShirtSize.L]: {
    fontSize: 14,
  },
  [TShirtSize.XL]: {
    fontSize: 14,
  },
});

export const getTextStyleByTShirtSize = (): TShirtToStyle => ({
  [TShirtSize.XS]: styles.XS,
  [TShirtSize.S]: styles.S,
  [TShirtSize.M]: styles.M,
  [TShirtSize.L]: styles.L,
  [TShirtSize.XL]: styles.XL,
});

// TODO: Create hook to import all the styles (text & wrapper)
