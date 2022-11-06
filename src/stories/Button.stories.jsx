import React from 'react';
import './style.css'

import { Button } from '../components/Button/Button';

export default {
  title: 'Components-TP1/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Primary Button',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  text: 'Default Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  text: 'Dashed Button',
};