import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    maxWidth: 325,
    minHeight: 405,
    width: '100%',
    backgroundColor: COLORS.white,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 24,
    borderColor: '#EAECF0',
    borderWidth: 1,
    borderStyle: 'solid',
    elevation: 20,
    shadowColor: 'rgba(16, 24, 40, 0.03)',
    shadowRadius: 6,
    shadowOpacity: -2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

const BACKGROUND_MODAL_TEST_ID = 'backgroundModalContainer';

export const BackgroundModal: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <View testID={BACKGROUND_MODAL_TEST_ID} style={styles.container}>
    {children}
  </View>
);
