import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../constants/colors';
import { TShirtSize } from '../../types/T-Shirt-size';
import { BasicButton, ButtonMode } from '../types';

const styles = StyleSheet.create({
  [TShirtSize.XL]: {
    paddingVertical: 16,
    paddingHorizontal: 28,
    width: 156,
    height: 60,
  },
  [TShirtSize.L]: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 129,
    height: 48,
  },
  [TShirtSize.M]: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: 125,
    height: 44,
  },
  [TShirtSize.S]: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    width: 110,
    height: 40,
  },
  [TShirtSize.XS]: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    width: 106,
    height: 36,
  },

  textSizeSmall: {
    fontSize: 14,
    lineHeight: 20,
  },
  textSizeM: {
    fontSize: 16,
    lineHeight: 24,
  },
  textSizeL: {
    fontSize: 18,
    lineHeight: 28,
  },
  primary: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.secondary,
  },
  warning: {
    backgroundColor: COLORS.warning,
    borderColor: COLORS.warning,
  },
  textPrimary: {
    color: COLORS.white,
  },
  textSecondary: {
    color: COLORS.purpleHeart,
  },
  textWarning: {
    color: COLORS.white,
  },
});

const getButtonSizeStyle = (size = TShirtSize.M) => {
  switch (size) {
    case TShirtSize.XS:
      return { sizeWrapper: { ...styles[TShirtSize.XS] }, sizeTypography: { ...styles.textSizeSmall } };
    case TShirtSize.S:
      return { sizeWrapper: { ...styles[TShirtSize.S] }, sizeTypography: { ...styles.textSizeSmall } };

    case TShirtSize.L:
      return { sizeWrapper: { ...styles[TShirtSize.L] }, sizeTypography: { ...styles.textSizeM } };
    case TShirtSize.XL:
      return { sizeWrapper: { ...styles[TShirtSize.XL] }, sizeTypography: { ...styles.textSizeL } };

    case TShirtSize.M:
    default:
      return { sizeWrapper: { ...styles[TShirtSize.M] }, sizeTypography: { ...styles.textSizeM } };
  }
};

const getButtonModeStyle = (mode = ButtonMode.PRIMARY) => {
  switch (mode) {
    case ButtonMode.SECONDARY:
      return { modeWrapper: { ...styles.secondary }, modeTypography: { ...styles.textSecondary } };
    case ButtonMode.WARNING:
      return { modeWrapper: { ...styles.warning }, modeTypography: { ...styles.textWarning } };
    case ButtonMode.PRIMARY:
    default:
      return { modeWrapper: { ...styles.primary }, modeTypography: { ...styles.textPrimary } };
  }
};

export const useButtonStyle = ({ size, mode }: BasicButton): Record<string, ViewStyle | TextStyle> => {
  const { sizeWrapper, sizeTypography } = getButtonSizeStyle(size);
  const { modeWrapper, modeTypography } = getButtonModeStyle(mode);

  return {
    wrapperStyle: { ...sizeWrapper, ...modeWrapper },
    typographyStyle: { ...sizeTypography, ...modeTypography },
  };
};
