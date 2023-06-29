import React, { FunctionComponent } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';

import { useButtonStyle } from './hooks/useButtonStyle';
import { BasicButton } from './types';
import { COLORS } from '../../constants/colors';
import { Typography } from '../Typography/Typography';

export interface ButtonProps extends BasicButton {
  onPress: () => void;
  text: string;
  testID?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: FunctionComponent;
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
    shadowColor: `${COLORS.lightGray}${COLORS.opacity005}`,
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
    fontWeight: '600',
    color: COLORS.white,
  },
  icon: {},
});
`1`;
export const Button = ({ onPress, text, testID, containerStyle, textStyle, size, mode }: ButtonProps) => {
  const { wrapperStyle, typographyStyle } = useButtonStyle({ size, mode });

  return (
    <TouchableOpacity testID={testID} style={[styles.container, wrapperStyle, containerStyle]} onPress={onPress}>
      <View style={styles.wrapper}>
        <Typography style={[styles.text, typographyStyle, textStyle]}>{text}</Typography>
      </View>
    </TouchableOpacity>
  );
};
