import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { textWeightToFontWeight } from './utils';
import { TShirtSize } from '../types/T-Shirt-size';
import { getStyleByTShirtSize } from '../utils/size-to-styles';

export interface TypographyProps extends TextProps {
  bold?: boolean;
  accessibilityLabel?: string;
  textSize?: TShirtSize;
  style?: StyleProp<TextStyle>;
  weight?: TextStyle['fontWeight'];
}

const styles = StyleSheet.create({
  [TShirtSize.XL]: {
    fontSize: 20,
    lineHeight: 30,
  },
  [TShirtSize.L]: {
    fontSize: 18,
    lineHeight: 28,
  },
  [TShirtSize.M]: {
    fontSize: 16,
    lineHeight: 24,
  },
  [TShirtSize.S]: {
    fontSize: 14,
    lineHeight: 20,
  },
  [TShirtSize.XS]: {
    fontSize: 12,
    lineHeight: 20,
  },
});

export const Typography: FunctionComponent<PropsWithChildren<TypographyProps>> = ({
  children,
  testID,
  accessibilityLabel,
  style,
  textSize,
  weight = '500',
  disabled = false,
  bold = false,
  ...props
}) => {
  const size = textSize ? getStyleByTShirtSize(styles)[textSize] : {};
  const fontWeight = textWeightToFontWeight(weight, bold);

  return (
    <Text
      style={[fontWeight, size, style]}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      accessible
      {...props}
    >
      {children}
    </Text>
  );
};
