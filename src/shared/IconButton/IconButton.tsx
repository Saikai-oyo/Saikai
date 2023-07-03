import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from '../Icon/Icon';
import { IconTypes } from '../Icon/types';

interface IconButtonProps {
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

export const IconButton: FunctionComponent<IconButtonProps> = ({ type }) => (
  <TouchableOpacity style={styles.container}>
    <Icon type={type} />
  </TouchableOpacity>
);
