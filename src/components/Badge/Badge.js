import React, { useState } from 'react';
import { Badge as BadgeAntD, Avatar } from 'antd';
import PropTypes from 'prop-types';

export const Badge = ({shape, count}) => {
  
  return (
    <>
      <BadgeAntD count={count}>
        <Avatar shape={shape} size="large" />
      </BadgeAntD>
    </>
  );
}

Badge.propTypes = {
  shape: PropTypes.string,
  count: PropTypes.number,
};






