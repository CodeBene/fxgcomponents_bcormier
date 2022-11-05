import React from 'react';
import './style.css'

import { Card } from '../components/Card/Card';

export default {
  title: 'Components-TP1/Card',
  component: Card
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({})
Basic.args = {
  title: "Basic card",
  bordered: true,
};

export const NoBorders = Template.bind({})
NoBorders.args = {
  title: "Card with no border",
  bordered: false,
};

export const Hover = Template.bind({})
Hover.args = {
  title: "Card with hover",
  bordered: true,
  hoverable: true
};