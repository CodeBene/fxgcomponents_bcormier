import React from 'react';
import './style.css'

import { Alert } from '../components/Alert/Alert';

export default {
  title: 'Components-TP1/Alert',
  component: Alert
};

const Template = (args) => <Alert {...args} />;


export const Success = Template.bind({});
Success.args = {
  text: 'Success Text',
  type: 'success'
};

export const Info = Template.bind({});
Info.args = {
  text: 'Info Text',
  type: 'info'
};

export const Error = Template.bind({});
Error.args = {
  text: 'Error Text',
  type: 'error'
};