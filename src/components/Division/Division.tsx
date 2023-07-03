import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants/colors';
import { TShirtSize } from '../../shared/types/T-Shirt-size';
import { Typography, TypographyProps } from '../../shared/Typography/Typography';

interface DivisionProps extends TypographyProps {
  text?: string;
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: COLORS.gray300,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray300,
  },
  wrapperText: {
    paddingHorizontal: 23,
  },
  text: {
    color: COLORS.gray300,
  },
});

export const Division: FunctionComponent<DivisionProps> = ({ text, ...props }) => {
  if (text) {
    return (
      <View style={styles.containerText}>
        <View style={styles.line} />
        <View style={styles.wrapperText}>
          <Typography textSize={TShirtSize.S} style={styles.text} {...props}>
            {text}
          </Typography>
        </View>
        <View style={styles.line} />
      </View>
    );
  }

  return <View style={styles.container} {...props} />;
};
