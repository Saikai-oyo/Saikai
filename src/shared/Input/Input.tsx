import React, { FunctionComponent, useState } from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';

import { COLORS } from '../../constants/colors';
import { Icon } from '../Icon/Icon';
import { IconTypes } from '../Icon/types';
import { TShirtSize } from '../types/T-Shirt-size';
import { Typography } from '../Typography/Typography';

export interface InputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label?: string;
  labelTestID?: string;
  name?: string;
  error?: string | null;
  disabled?: boolean;
  iconType?: IconTypes;
  iconWithSplit?: boolean;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 80,
  },
  label: {
    fontSize: 13,
    textAlign: 'left',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    minHeight: 45,
    lineHeight: 24,
    marginVertical: 3,
    backgroundColor: COLORS.white,
    color: COLORS.black,
    borderColor: COLORS.lightSilver,
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: 'transparent',
    ...Platform.select({
      native: {},
      default: {
        outlineStyle: 'none',
      },
    }),
  },
  icon: {
    position: 'absolute',
    left: 20,
    alignItems: 'center',
    fontSize: 22,
  },
  passwordIcon: {
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    fontSize: 5,
  },
  placeholderWithIcon: {
    paddingLeft: 50,
    paddingTop: 2,
    paddingBottom: 2,
  },
  inputError: {
    borderColor: COLORS.salmonPink,
  },
  borderFocus: {
    borderColor: '#c282f4',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowColor: '#c282f4',
    shadowOpacity: 10,
    shadowRadius: 4,
  },
  disable: {
    backgroundColor: COLORS.ghostWhite,
    color: COLORS.darkLiver,
  },
  errorWrapper: {
    // marginTop: 6,
  },
  error: {
    color: COLORS.warning,
  },
});

export const Input: FunctionComponent<InputProps> = ({
  accessibilityLabel,
  testID,
  labelTestID,
  placeholder,
  style,
  labelStyle,
  label,
  error,
  onBlur,
  value,
  iconType,
  name = '',
  disabled = false,
  secureTextEntry = false,
  iconWithSplit = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Typography testID={labelTestID} style={[styles.label, labelStyle]}>
          {label}
        </Typography>
      )}
      <View style={styles.inputWrapper}>
        {iconType && <Icon iconWithSplit={iconWithSplit} containerStyle={styles.icon} type={iconType} />}
        <TextInput
          style={[
            styles.input,
            Boolean(error) && styles.inputError,
            disabled && styles.disable,
            isFocused && !disabled && styles.borderFocus,
            iconType && styles.placeholderWithIcon,
            style,
          ]}
          placeholderTextColor={COLORS.darkLiver}
          id={name}
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          placeholder={placeholder}
          secureTextEntry={hidePassword}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          editable={!disabled}
          accessible
          {...props}
        />
        {secureTextEntry && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            containerStyle={styles.passwordIcon}
            type={hidePassword ? 'eye-close' : 'eye-open'}
          />
        )}
      </View>
      {error && (
        <View style={styles.errorWrapper}>
          <Typography textSize={TShirtSize.S} style={styles.error}>
            {error}
          </Typography>
        </View>
      )}
    </View>
  );
};
