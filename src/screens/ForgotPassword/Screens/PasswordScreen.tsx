import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { PasswordSchema, onSubmit } from './handlers/password-handlers';
import { BackgroundModal } from '../../../components/BackgroundModal/BackgroundModal';
import { COLORS } from '../../../constants/colors';
import { RootScreenNames, RootStackParamList } from '../../../navigation/RootStackScreens';
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
  passwordWrapper: {
    paddingBottom: 20,
  },
  password: {
    color: COLORS.gray500,
  },
  input: {
    paddingBottom: 16,
  },
  confirmationPassword: {
    paddingBottom: 45,
  },
  button: {
    width: '100%',
  },
});

export const PasswordScreen: FunctionComponent<
  NativeStackScreenProps<RootStackParamList, RootScreenNames.PasswordScreen>
> = () => (
  <BackgroundModal>
    <View style={styles.back}>
      <IconButton type="back" />
    </View>
    <Typography style={styles.title} textSize={TShirtSize.L}>
      Forgot Password
    </Typography>
    <Formik initialValues={{ password: '', confirmPassword: '' }} onSubmit={onSubmit} validationSchema={PasswordSchema}>
      {({ isSubmitting, handleChange, handleSubmit, setFieldTouched, handleBlur, values, errors, touched }) => (
        <View>
          <Input
            secureTextEntry
            name="password"
            autoCapitalize="none"
            placeholder="Password"
            containerStyle={styles.input}
            value={values.password}
            error={touched.password && errors.password ? errors.password : null}
            onChangeText={handleChange('password')}
            onBlur={() => {
              setFieldTouched('password');
              handleBlur('password');
            }}
          />
          <View style={styles.passwordWrapper}>
            <Typography weight="400" style={styles.password} textSize={TShirtSize.S}>
              &#x2022; Minimum 8 characters.
            </Typography>
            <Typography weight="400" style={styles.password} textSize={TShirtSize.S}>
              &#x2022; At least 1 capital letter.
            </Typography>
            <Typography weight="400" style={styles.password} textSize={TShirtSize.S}>
              &#x2022; At Least 1 number
            </Typography>
          </View>
          <Input
            secureTextEntry
            name="confirmPassword"
            autoCapitalize="none"
            placeholder="Confirm Password"
            containerStyle={styles.confirmationPassword}
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null}
            onChangeText={handleChange('confirmPassword')}
            onBlur={() => {
              setFieldTouched('confirmPassword');
              handleBlur('confirmPassword');
            }}
          />

          <Button
            weight="400"
            containerStyle={styles.button}
            size={TShirtSize.L}
            text="Reset my Password"
            disabled={isSubmitting}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  </BackgroundModal>
);
