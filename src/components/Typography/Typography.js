import React from 'react';
import {Typography as TypographyAntD} from 'antd';
const { Text } = TypographyAntD;
import PropTypes from 'prop-types';
/**
 * Text in italic or bold or underlined
 */

 export const Typography = ({italic, strong, underline}) =>  {

return(
  <>
  <Text italic={italic} strong={strong} underline={underline}>
    Cette phrase a un style personnalisé en ce qui a trait à sa typographie.  
  </Text>
  
</>
);
}

Typography.propTypes = {
  italic: PropTypes.bool,
  strong: PropTypes.bool,
  underline: PropTypes.bool
};