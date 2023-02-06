import React from 'react';

import DateInput, {DateInputProps} from '../../DateInput';

const UntilDateInput = ({label = 'Até', ...rest}: DateInputProps) => {
  return <DateInput label={label} {...rest} />;
};

export default UntilDateInput;
