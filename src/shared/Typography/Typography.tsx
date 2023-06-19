import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { TextSize } from './types';

export interface TypographyProps extends TextProps {
  bold?: boolean;
  accessibilityLabel?: string;
  textSize?: TextSize;
  style?: StyleProp<TextStyle>;
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  [TextSize.XL]: {
    fontSize: 30,
  },
  [TextSize.L]: {
    fontSize: 20,
  },
  [TextSize.M]: {
    fontSize: 20,
  },
  [TextSize.S]: {
    fontSize: 20,
  },
  [TextSize.XS]: {
    fontSize: 20,
  },
});

const textSizeToStyle: Record<TextSize, TextStyle> = {
  [TextSize.XS]: styles.h3,
  [TextSize.S]: styles.h3,
  [TextSize.M]: styles.h3,
  [TextSize.L]: styles.h3,
  [TextSize.XL]: styles.h1,
};

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
  const size = textSize ? textSizeToStyle[textSize] : {};

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