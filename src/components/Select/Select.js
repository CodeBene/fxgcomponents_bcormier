import { Select as SelectAntD } from 'antd';
import PropTypes from 'prop-types';

const {Option} = SelectAntD

/**
 * Select menu with 3 items
 */
export const Select = ({defaultValue, value1, value2, value3, bordered, status}) => {


  return (
    <>
      <SelectAntD 
        defaultValue={defaultValue}
        bordered={bordered}
        status={status}
      >
        <Option value={value1}>{value1}</Option> 
        <Option value={value2}>{value2}</Option> 
        <Option value={value3}>{value3}</Option> 
      </SelectAntD>
      
    </>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
  bordered: PropTypes.bool,
  status: PropTypes.string,
};






