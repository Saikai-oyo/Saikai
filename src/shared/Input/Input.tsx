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
  containerStyle?: StyleProp<TextStyle>;
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
    height: 75,
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
    borderColor: COLORS.gray300,
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
    borderColor: COLORS.error300,
  },
  borderFocus: {
    borderColor: COLORS.primary300,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowColor: COLORS.primary300,
    shadowOpacity: 10,
    shadowRadius: 4,
  },
  disable: {
    backgroundColor: COLORS.gray50,
    color: COLORS.gray500,
  },
  error: {
    color: COLORS.error600,
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
  containerStyle,
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
    <View style={[styles.container, containerStyle]}>
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
          placeholderTextColor={COLORS.gray500}
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
        <View>
          <Typography textSize={TShirtSize.S} style={styles.error}>
            {error}
          </Typography>
        </View>
      )}
    </View>
  );
};
