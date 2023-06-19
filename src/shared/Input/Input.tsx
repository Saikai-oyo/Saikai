import React, { FunctionComponent } from 'react';
import { Keyboard, StyleProp, StyleSheet, TextInput, TextInputProps, TextStyle, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { Typography } from '../Typography/Typography';

export interface InputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    textAlign: 'left',
  },
  input: {
    paddingHorizontal: 55,
    paddingVertical: 15,
    borderRadius: 15,
    fontSize: 16,
    height: 60,
    marginVertical: 3,
    marginBottom: 10,
    backgroundColor: `${COLORS.softGray}${COLORS.opacity03}`,
    color: COLORS.black,
  },
});

export const Input: FunctionComponent<InputProps> = ({
  accessibilityLabel,
  testID,
  placeholder,
  onChange,
  style,
  labelStyle,
  label,
  secureTextEntry = false,
}) => (
  <View>
    {label && <Typography style={[styles.label, labelStyle]}>{label}</Typography>}
    <TextInput
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.input, style]}
      placeholder={placeholder}
      onChange={onChange}
      secureTextEntry={secureTextEntry}
      onBlur={Keyboard.dismiss}
      accessible
    />
  </View>
);
