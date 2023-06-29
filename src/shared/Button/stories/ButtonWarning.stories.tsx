import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TShirtSize } from '../../types/T-Shirt-size';
import { Typography } from '../../Typography/Typography';
import { Button } from '../Button';
import { ButtonMode } from '../types';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

const ButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button/Warning',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    text: 'Button CTA',
    mode: ButtonMode.WARNING,
  },
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const AllSizes: ButtonStory = (args) => (
  <View>
    <View style={styles.container}>
      <Typography bold>{`${TShirtSize.XS} => `}</Typography>
      <Button size={TShirtSize.XS} {...args} text={args.text} />
    </View>
    <View style={styles.container}>
      <Typography bold>{`${TShirtSize.S} => `}</Typography>
      <Button size={TShirtSize.S} {...args} text={args.text} />
    </View>
    <View style={styles.container}>
      <Typography bold>{`${TShirtSize.M} => `}</Typography>
      <Button size={TShirtSize.M} {...args} text={args.text} />
    </View>
    <View style={styles.container}>
      <Typography bold>{`${TShirtSize.L} => `}</Typography>
      <Button size={TShirtSize.L} {...args} text={args.text} />
    </View>
    <View style={styles.container}>
      <Typography bold>{`${TShirtSize.XL} => `}</Typography>
      <Button size={TShirtSize.XL} {...args} text={args.text} />
    </View>
  </View>
);
export const XS: ButtonStory = (args) => <Button size={TShirtSize.XS} {...args} />;
export const S: ButtonStory = (args) => <Button size={TShirtSize.S} {...args} />;
export const M: ButtonStory = (args) => <Button size={TShirtSize.M} {...args} />;
export const L: ButtonStory = (args) => <Button size={TShirtSize.L} {...args} />;
export const XL: ButtonStory = (args) => <Button size={TShirtSize.XL} {...args} />;
