import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { Typography } from './Typography';
import { TShirtSize } from '../types/T-Shirt-size';

const TypographyMeta: ComponentMeta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  argTypes: {},
  args: {
    children: 'This is some text',
  },
};

export default TypographyMeta;

type TypographyStory = ComponentStory<typeof Typography>;

export const AllSizes: TypographyStory = (args) => (
  <View>
    <Typography textSize={TShirtSize.XS} {...args} children={`${args.children} => ${TShirtSize.XS}`} />
    <Typography textSize={TShirtSize.S} {...args} children={`${args.children} => ${TShirtSize.S}`} />
    <Typography textSize={TShirtSize.M} {...args} children={`${args.children} => ${TShirtSize.M}`} />
    <Typography textSize={TShirtSize.L} {...args} children={`${args.children} => ${TShirtSize.L}`} />
    <Typography textSize={TShirtSize.XL} {...args} children={`${args.children} => ${TShirtSize.XL}`} />
  </View>
);
export const XS: TypographyStory = (args) => <Typography textSize={TShirtSize.XS} {...args} />;
export const S: TypographyStory = (args) => <Typography textSize={TShirtSize.S} {...args} />;
export const M: TypographyStory = (args) => <Typography textSize={TShirtSize.M} {...args} />;
export const L: TypographyStory = (args) => <Typography textSize={TShirtSize.L} {...args} />;
export const XL: TypographyStory = (args) => <Typography textSize={TShirtSize.XL} {...args} />;

export const Bold: TypographyStory = (args) => <Typography bold textSize={TShirtSize.M} {...args} />;
