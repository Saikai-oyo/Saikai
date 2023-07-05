import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Icon } from '../Icon/Icon';
import { IconTypes } from '../Icon/types';

interface IconButtonProps extends TouchableOpacityProps {
  type: IconTypes;
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    padding: 0,
    width: 'fit-content',
  },
});

export const IconButton: FunctionComponent<IconButtonProps> = ({ type, ...props }) => (
  <TouchableOpacity style={styles.container} {...props}>
    <Icon type={type} />
  </TouchableOpacity>
);
