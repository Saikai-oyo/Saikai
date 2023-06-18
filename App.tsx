import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from './src/constants/colors';
import { Typography } from './src/shared/Typography/Typography';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography bold>Open up App.tsx to start working on your app!</Typography>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
