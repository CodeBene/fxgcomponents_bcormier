import React from 'react';
import { Input as TextAreaAntD} from 'antd';
import PropTypes from 'prop-types';

/**
 * Input of type TextArea 
 */
 export const Input = ({maxLength, placeholder, width}) =>  {

return(
<>
<TextAreaAntD showCount={true} size="large" maxLength={maxLength} placeholder={placeholder} style={{ width: `${width}%`}}
>
</TextAreaAntD>
</>);
}

Input.propTypes = {
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  width: PropTypes.number
};