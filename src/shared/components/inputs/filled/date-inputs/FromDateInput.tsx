import React from 'react';

import DateInput, {DateInputProps} from '../../DateInput';

const FromDateInput = ({label = 'De', ...rest}: DateInputProps) => {
  return <DateInput label={label} {...rest} />;
};

export default FromDateInput;
