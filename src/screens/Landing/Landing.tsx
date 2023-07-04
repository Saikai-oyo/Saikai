import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import { RootScreenNames, RootStackParamList } from '../../Navigation/Stacks/RootStackScreens';
import { Button } from '../../shared/Button/Button';
import { Typography } from '../../shared/Typography/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Landing: FunctionComponent<NativeStackScreenProps<RootStackParamList, RootScreenNames.Landing>> = ({
  navigation,
}) => (
  <View style={styles.container}>
    <Typography>Home Screen</Typography>
    <Button text="Go to Login" onPress={() => navigation.navigate(RootScreenNames.Login)} />
  </View>
);
