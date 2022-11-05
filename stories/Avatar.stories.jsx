import React from 'react';
import './style.css'

import { Avatar } from '../src/components/Avatar/Avatar';

export default {
  title: 'Components-TP1/Avatar',
  component: Avatar
};

const Template = (args) => <Avatar {...args} />

export const Small = Template.bind({});
Small.args = {
  size: 30
};

export const Medium = Template.bind({});
Medium.args = {
  size: 60
};

export const Large = Template.bind({});
Large.args = {
  size: 90
};