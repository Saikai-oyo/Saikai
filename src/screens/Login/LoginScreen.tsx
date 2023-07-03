import { Formik, FormikHelpers } from 'formik';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Division } from '../../components/Division/Division';
import { Button } from '../../shared/Button/Button';
import { ButtonMode } from '../../shared/Button/types';
import { IconButton } from '../../shared/IconButton/IconButton';
import { Input } from '../../shared/Input/Input';
import { TShirtSize } from '../../shared/types/T-Shirt-size';
import { Typography } from '../../shared/Typography/Typography';

interface LoginDetails {
  email: string;
  password: string;
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    height: 230,
  },
  button: {
    marginTop: 20,
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
});

export const LoginScreen = () => {
  const formValidate = ({ password, email }: LoginDetails) => {
    const errors: Record<string, string> = {};
    if (!password) {
      errors.password = 'Required!';
    }

    if (!email) {
      errors.email = 'Required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (values: LoginDetails, { setSubmitting }: FormikHelpers<LoginDetails>) => {
    //TODO: Initiate this later [SFE-26]
  };

  return (
    <View>
      <Typography style={styles.title} textSize={TShirtSize.L}>
        Login
      </Typography>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validate={formValidate}>
        {({ isSubmitting, handleChange, handleSubmit, handleBlur, values, errors }) => (
          <View>
            <View>
              <Input
                error={errors.email}
                name="email"
                onBlur={handleBlur('email')}
                keyboardType="email-address"
                placeholder="email"
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <Input
                error={errors.password}
                name="password"
                onBlur={handleBlur('password')}
                placeholder="password"
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
        <Division text="Or" />
        <View style={styles.buttonLoginMethods}>
          <IconButton type="linkedin" />
          <IconButton type="google" />
          <IconButton type="facebook" />
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Button
          text="Forgot Password?"
          textSize={TShirtSize.S}
          mode={ButtonMode.TYPOGRAPHY}
          size={TShirtSize.XS}
          onPress={() => {
            // Do something
          }}
        />
        <View style={styles.footer}>
          <Typography textSize={TShirtSize.S}>Don&#8217;t have an account? </Typography>
          <Button
            bold
            text=" Sign up"
            textSize={TShirtSize.S}
            mode={ButtonMode.TYPOGRAPHY}
            size={TShirtSize.XS}
            containerStyle={styles.buttonFooter}
            onPress={() => {
              // Do something
            }}
          />
        </View>
      </View>
    </View>
  );
};
