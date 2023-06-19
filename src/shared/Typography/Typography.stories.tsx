import { ComponentMeta, ComponentStory } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { TextSize } from './types';
import { Typography } from './Typography';

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
    <Typography textSize={TextSize.XS} {...args} children={`${args.children} => ${TextSize.XS}`} />
    <Typography textSize={TextSize.S} {...args} children={`${args.children} => ${TextSize.S}`} />
    <Typography textSize={TextSize.M} {...args} children={`${args.children} => ${TextSize.M}`} />
    <Typography textSize={TextSize.L} {...args} children={`${args.children} => ${TextSize.L}`} />
    <Typography textSize={TextSize.XL} {...args} children={`${args.children} => ${TextSize.XL}`} />
  </View>
);
export const XS: TypographyStory = (args) => <Typography textSize={TextSize.XS} {...args} />;
export const S: TypographyStory = (args) => <Typography textSize={TextSize.S} {...args} />;
export const M: TypographyStory = (args) => <Typography textSize={TextSize.M} {...args} />;
export const L: TypographyStory = (args) => <Typography textSize={TextSize.L} {...args} />;
export const XL: TypographyStory = (args) => <Typography textSize={TextSize.XL} {...args} />;

export const Bold: TypographyStory = (args) => <Typography bold textSize={TextSize.M} {...args} />;
