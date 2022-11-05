import React from 'react';
import { Avatar as AvatarAntd} from 'antd';
import { FaUserAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';

export const Avatar = ({size}) => {
  
  return (
    <>
      <AvatarAntd
        icon = {<FaUserAlt />}
        size={size}
      />
    </>
  );
}

Avatar.propTypes = {
  size: PropTypes.number,
};






