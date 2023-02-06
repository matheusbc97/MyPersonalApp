import React from 'react';

import DateInput, {DateInputProps} from '../../DateInput';

const ExpiringDateTextInput = ({
  label = 'Data de Expiração',
  ...rest
}: Partial<DateInputProps>) => {
  return <DateInput label={label} {...rest} />;
};

export default ExpiringDateTextInput;
