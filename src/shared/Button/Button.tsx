import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { useButtonStyle } from './hooks/useButtonStyle';
import { BasicButton } from './types';
import { COLORS } from '../../constants/colors';
import { TShirtSize } from '../types/T-Shirt-size';
import { Typography } from '../Typography/Typography';

export interface ButtonProps extends BasicButton {
  onPress: () => void;
  text: string;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: FunctionComponent;
  disabled?: boolean;
  bold?: boolean;
  weight?: TextStyle['fontWeight'];
  textSize?: TShirtSize;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowRadius: 2,
    shadowColor: `${COLORS.gray900}${COLORS.opacity005}`,
    shadowOffset: {
      height: 0,
      width: 1,
    },
  },
  wrapper: {
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Inter',
    color: COLORS.white,
  },
});

export const Button = ({
  onPress,
  text,
  testID,
  containerStyle,
  textStyle,
  size,
  mode,
  bold,
  textSize,
  weight = '400',
  disabled = false,
}: ButtonProps) => {
  const { wrapperStyle, typographyStyle } = useButtonStyle({ size, mode });

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.container, wrapperStyle, containerStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.wrapper}>
        <Typography weight={weight} bold={bold} textSize={textSize} style={[styles.text, typographyStyle, textStyle]}>
          {text}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
