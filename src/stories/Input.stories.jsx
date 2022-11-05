import React from 'react';
import './style.css'

import { Input } from '../components/Input/Input';

export default {
  title: 'Components-TP1/Input',
  component: Input
};

const Template = (args) => <Input {...args} />;

export const Short = Template.bind({})
Short.args = {
  maxLength: 15,
  placeholder: "Max 15 characters",
  width: 10
};

export const Medium = Template.bind({})
Medium.args = {
  maxLength: 50,
  placeholder: "Max 50 characters",
  width: 20
};

export const Long = Template.bind({});
Long.args = {
  maxLength: 100,
  placeholder: "Max 100 characters",
  width: 40
};