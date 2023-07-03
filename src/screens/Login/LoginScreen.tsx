import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { LoginSchema, onSubmit } from './utils/form-handlers';
import { Division } from '../../components/Division/Division';
import { COLORS } from '../../constants/colors';
import { Button } from '../../shared/Button/Button';
import { ButtonMode } from '../../shared/Button/types';
import { IconButton } from '../../shared/IconButton/IconButton';
import { Input } from '../../shared/Input/Input';
import { TShirtSize } from '../../shared/types/T-Shirt-size';
import { Typography } from '../../shared/Typography/Typography';

export interface LoginDetails {
  email: string;
  password: string;
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    color: COLORS.gray700,
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    height: 230,
  },
  button: {
    marginTop: 15,
    marginBottom: 5,
    width: 'auto',
  },
  loginMethodWrapper: {
    marginTop: 18,
    marginBottom: 15,
  },
  buttonLoginMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 18,
    paddingBottom: 5,
  },
  footerWrapper: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonFooter: {
    width: 'fit-content',
    paddingHorizontal: 0,
  },
  grayText: {
    color: COLORS.gray500,
  },
  lightWeight: {
    fontWeight: '400',
  },
});

export const LoginScreen = () => {
  const renderThirdPartyLoginButton = () => (
    <View style={styles.buttonLoginMethods}>
      <IconButton type="linkedin" />
      <IconButton type="google" />
      <IconButton type="facebook" />
    </View>
  );

  return (
    <View>
      <Typography style={styles.title} textSize={TShirtSize.L}>
        Login
      </Typography>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={LoginSchema}>
        {({ isSubmitting, handleChange, handleSubmit, setFieldTouched, handleBlur, values, errors, touched }) => (
          <View>
            <View>
              <Input
                autoCapitalize="none"
                error={touched.email && errors.email ? errors.email : null}
                name="email"
                onBlur={() => {
                  setFieldTouched('email');
                  handleBlur('email');
                }}
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <Input
                autoCapitalize="none"
                error={touched.password && errors.password ? errors.password : null}
                name="password"
                onBlur={() => {
                  setFieldTouched('password');
                  handleBlur('password');
                }}
                placeholder="Password"
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            <Button containerStyle={styles.button} text="Login" onPress={handleSubmit} disabled={isSubmitting} />
          </View>
        )}
      </Formik>
      <View style={styles.loginMethodWrapper}>
        <Division style={styles.grayText} text="Or" />
        {renderThirdPartyLoginButton()}
      </View>
      <View style={styles.footerWrapper}>
        <Button
          text="Forgot Password?"
          textSize={TShirtSize.S}
          mode={ButtonMode.TYPOGRAPHY}
          size={TShirtSize.XS}
          textStyle={styles.grayText}
          onPress={() => {
            // Do something
          }}
        />
        <View style={styles.footer}>
          <Typography style={[styles.grayText, styles.lightWeight]} textSize={TShirtSize.S}>
            Don&#8217;t have an account?{' '}
          </Typography>
          <Button
            bold
            text="Sign up"
            textSize={TShirtSize.S}
            mode={ButtonMode.TYPOGRAPHY}
            size={TShirtSize.XS}
            containerStyle={styles.buttonFooter}
            textStyle={styles.grayText}
            onPress={() => {
              // Do something
            }}
          />
        </View>
      </View>
    </View>
  );
};
