import React from 'react';
import './style.css'

import { Badge } from '../components/Badge/Badge';

export default {
  title: 'Components-TP1/Badge',
  component: Badge
};

const Template = (args) => <Badge {...args} />;

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  count: 5,
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
  count: 100,
};

export const Square70 = Template.bind({});
Square70.args = {
  shape: 'square',
  count: 70,
};