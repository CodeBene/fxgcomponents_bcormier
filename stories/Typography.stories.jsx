import React from 'react';
import './style.css'

import { Typography } from '../src/components/Typography/Typography';

export default {
  title: 'Components-TP1/Typography',
  component: Typography
};

const Template = (args) => <Typography {...args} />;

export const Italic = Template.bind({})
Italic.args = {
  italic: true,
};

export const Strong = Template.bind({})
Strong.args = {
  strong: true
};

export const Underline = Template.bind({})
Underline.args = {
  underline: true
};