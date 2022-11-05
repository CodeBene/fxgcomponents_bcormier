import React, { useState } from 'react';
import { Alert as AlertAntD } from 'antd';
import PropTypes from 'prop-types';

export const Alert = ({text, type}) => {
  
  return (
    <>
      <AlertAntD
        message={text}
        type={type}
      />
    </>
  );
}

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};






