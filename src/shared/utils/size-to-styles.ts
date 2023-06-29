import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TShirtSize } from '../types/T-Shirt-size';

type TShirtToStyle = Record<string, StyleProp<TextStyle | ViewStyle>>;

export const getStyleByTShirtSize = (styles: TShirtToStyle): TShirtToStyle => ({
  [TShirtSize.XS]: styles.XS,
  [TShirtSize.S]: styles.S,
  [TShirtSize.M]: styles.M,
  [TShirtSize.L]: styles.L,
  [TShirtSize.XL]: styles.XL,
});
