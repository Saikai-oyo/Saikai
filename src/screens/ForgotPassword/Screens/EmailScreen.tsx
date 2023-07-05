import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { BackgroundModal } from '../../../components/BackgroundModal/BackgroundModal';
import { COLORS } from '../../../constants/colors';
import { RootScreenNames, RootStackParamList } from '../../../navigation/Stacks/RootStackScreens';
import { Button } from '../../../shared/Button/Button';
import { IconButton } from '../../../shared/IconButton/IconButton';
import { Input } from '../../../shared/Input/Input';
import { TShirtSize } from '../../../shared/types/T-Shirt-size';
import { Typography } from '../../../shared/Typography/Typography';

const styles = StyleSheet.create({
  back: {
    paddingBottom: 24,
  },
  title: {
    color: COLORS.gray700,
    paddingBottom: 16,
  },
  subtitle: {
    color: COLORS.gray500,
    paddingBottom: 16,
  },
  input: {
    paddingBottom: 24,
  },
  button: {
    width: '100%',
  },
});

export const EmailScreen: FunctionComponent<
  NativeStackScreenProps<RootStackParamList, RootScreenNames.EmailScreen>
> = () => (
  <BackgroundModal>
    <View style={styles.back}>
      <IconButton type="back" />
    </View>
    <Typography style={styles.title} textSize={TShirtSize.L}>
      Forgot Password
    </Typography>
    <Typography style={styles.subtitle} weight="400" textSize={TShirtSize.S}>
      Reset Password using your mail
    </Typography>
    <Input containerStyle={styles.input} placeholder="Email" keyboardType="email-address" autoCapitalize="none" />
    <Button
      weight="400"
      containerStyle={styles.button}
      size={TShirtSize.L}
      text="Reset my Password"
      onPress={() => {
        // Trigger Modal
      }}
    />
  </BackgroundModal>
);
