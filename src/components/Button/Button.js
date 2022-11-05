import { Button as ButtonAntD } from 'antd';
import PropTypes from 'prop-types';

export const Button = ({type, text}) => {
 
  return (
    <>
      <ButtonAntD 
        type={type}
        shape='round'
      >
      {text}
      </ButtonAntD>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};






