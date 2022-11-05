import { Empty as EmptyAntD } from 'antd';
import PropTypes from 'prop-types';

export const Empty = ({image}) => {
 
  return (
    <>
      <EmptyAntD 
        image={image}
      >
      </EmptyAntD>
    </>
  );
}

Empty.propTypes = {
  image: PropTypes.any,
};






