import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';

import { TShirtSize } from '../types/T-Shirt-size';
import { getStyleByTShirtSize } from '../utils/size-to-styles';

export interface TypographyProps extends TextProps {
  bold?: boolean;
  accessibilityLabel?: string;
  textSize?: TShirtSize;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  [TShirtSize.XL]: {
    fontSize: 50,
  },
  [TShirtSize.L]: {
    fontSize: 40,
  },
  [TShirtSize.M]: {
    fontSize: 30,
  },
  [TShirtSize.S]: {
    fontSize: 20,
  },
  [TShirtSize.XS]: {
    fontSize: 10,
  },
});

export const Typography: FunctionComponent<PropsWithChildren<TypographyProps>> = ({
  children,
  testID,
  accessibilityLabel,
  style,
  textSize,
  disabled = false,
  bold = false,
  ...props
}) => {
  const boldStyle = bold ? styles.bold : {};
  const size = textSize ? getStyleByTShirtSize(styles)[textSize] : {};

  return (
    <Text
      style={[boldStyle, size, style]}
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
