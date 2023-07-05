import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    maxWidth: 325,
    height: 'auto',
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    borderColor: COLORS.gray200,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  firstShadow: {
    elevation: 6,
    shadowColor: `{${COLORS.gray900}${COLORS.opacity003}}`,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
  },
  secondShadow: {
    elevation: 16,
    shadowColor: `{${COLORS.gray900}${COLORS.opacity003}}`,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    borderRadius: 24,
  },
});

const BACKGROUND_MODAL_TEST_ID = 'backgroundModalContainer';

export const BackgroundModal: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <View testID={BACKGROUND_MODAL_TEST_ID} style={[styles.container, styles.firstShadow]}>
    <View style={styles.secondShadow}>{children}</View>
  </View>
);
