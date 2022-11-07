import React from 'react';
import './style.css'

import { Rate } from '../components/Rate/Rate';

export default {
  title: 'Components-TP1/Rate',
  component: Rate
};

const Template = (args) => <Rate {...args} />;

export const Basic = Template.bind({})
Basic.args = {
};

export const HalfStar = Template.bind({})
HalfStar.args = {
    allowHalf: true
};
export const ReadOnly = Template.bind({})
ReadOnly.args = {
    disabled: true,
    defaultValue: 2
};