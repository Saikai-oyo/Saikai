import React, { FunctionComponent, useMemo } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { IconTypes } from './types';
import { getIconByType } from './utils/getIconByType';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    minWidth: 24,
    minHeight: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconWithBorder: {
    borderRightColor: COLORS.gray300,
    borderRightWidth: 1,
    paddingRight: 5,
  },
});

export const IconTestIds = {
  containerWithButton: 'icon-container-with-button',
  container: 'icon-container',
  icon: 'icon',
};

export interface IconProps extends SvgProps {
  type: IconTypes;
  height?: number;
  width?: number;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
  iconWithSplit?: boolean;
}

export const Icon: FunctionComponent<IconProps> = ({
  type,
  containerStyle,
  iconWithSplit,
  onPress,
  width,
  height,
  hitSlop,
  ...props
}) => {
  const IconCostumeComponent = useMemo(() => getIconByType(type), [type]);

  if (!IconCostumeComponent) {
    return null;
  }

  const renderIconWithButton = () => {
    if (onPress) {
      return (
        <TouchableOpacity onPress={onPress}>
          <IconCostumeComponent
            testID={IconTestIds.containerWithButton}
            hitSlop={hitSlop}
            width={width}
            height={height}
            {...props}
          />
        </TouchableOpacity>
      );
    }

    return (
      <IconCostumeComponent testID={IconTestIds.icon} width={width} height={height} onPress={onPress} {...props} />
    );
  };

  return (
    <View
      style={[styles.container, iconWithSplit && styles.iconWithBorder, containerStyle]}
      testID={IconTestIds.container}
    >
      {renderIconWithButton()}
    </View>
  );
};
