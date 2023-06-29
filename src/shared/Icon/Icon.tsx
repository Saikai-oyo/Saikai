import React, { FunctionComponent, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { IconTypes } from './types';
import { getIconByType } from './utils/getIconByType';

const styles = StyleSheet.create({
  container: {
    minWidth: 24,
    minHeight: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const IconTestIds = {
  container: 'icon-container',
  icon: 'icon',
};

export interface IconProps extends SvgProps {
  type: IconTypes;
  height?: number;
  width?: number;
  color?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Icon: FunctionComponent<IconProps> = ({ type, containerStyle, ...props }) => {
  const IconCostumeComponent = useMemo(() => getIconByType(type), [type]);

  if (!IconCostumeComponent) {
    return null;
  }
  console.log('idan -  Icon IconCostumeComponent', IconCostumeComponent);

  return (
    <View style={[styles.container, containerStyle]} testID={IconTestIds.container}>
      <IconCostumeComponent testID={IconTestIds.icon} width={24} height={24} {...props} />
    </View>
  );
};
