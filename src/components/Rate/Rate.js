import React from 'react';
import { Rate as RateAntD} from 'antd';
import PropTypes from 'prop-types';

/**
 * Rating with 5 stars
 */
 export const Rate = ({allowHalf, disabled, defaultValue }) =>  {

return(
<>
<RateAntD allowHalf={allowHalf} disabled={disabled} defaultValue={defaultValue}
>
</RateAntD>
</>);
}


Rate.propTypes = {
    allowHalf: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.number
};