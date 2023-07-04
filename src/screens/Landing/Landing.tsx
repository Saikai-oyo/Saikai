import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '../../shared/Button/Button';
import { Typography } from '../../shared/Typography/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Landing = ({ navigation }) => (
  <View style={styles.container}>
    <Typography>Home Screen</Typography>
    <Button text="Go to Login" onPress={() => navigation.navigate('Login')} />
  </View>
);
