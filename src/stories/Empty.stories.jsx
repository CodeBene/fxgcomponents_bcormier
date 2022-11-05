import React from 'react';
import './style.css'
import { Empty as EmptyAntD } from 'antd'

import { Empty } from '../components/Empty/Empty';

export default {
  title: 'Components-TP1/Empty',
  component: Empty
};

const Template = (args) => <Empty {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  image: EmptyAntD.PRESENTED_IMAGE_DEFAULT,
};

export const WithImage = Template.bind({});
WithImage.args = {
    image: 'assets/img/dog-coding.jpg',
};

export const Simple = Template.bind({});
Simple.args = {
    image: EmptyAntD.PRESENTED_IMAGE_SIMPLE,
};