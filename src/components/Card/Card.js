import React from 'react';
import { Card as CardAntD} from 'antd';
import PropTypes from 'prop-types';

/**
 * Card with 3 different styles
 */
 export const Card = ({title, bordered, hoverable}) =>  {

return(
<>
<CardAntD  
title={title}
bordered={bordered}
hoverable={hoverable}
    style={{
      width: 300}}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>

</CardAntD>
</>);
}

Card.propTypes = {
    title: PropTypes.string,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool

};