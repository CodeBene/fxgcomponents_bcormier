import React from 'react';
import './style.css'

import { Select } from '../components/Select/Select';

export default {
  title: 'Components-TP1/Select',
  component: Select
};

const Template = (args) => <Select {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  defaultValue: 'Tesla',
  value1: 'BMW',
  value2: 'Tesla',
  value3: 'Nissan',
  status: ''
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  defaultValue: 'Tesla',
  value1: 'BMW',
  value2: 'Tesla',
  value3: 'Nissan',
  bordered: false,
  status: ''
};

export const Error = Template.bind({});
Error.args = {
  defaultValue: 'Tesla',
  value1: 'BMW',
  value2: 'Tesla',
  value3: 'Nissan',
  bordered: true,
  status: 'error'
};