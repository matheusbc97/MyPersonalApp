import React, {ForwardedRef, forwardRef} from 'react';

import TextInput, {TextInputProps, TextInputHandles} from '../../TextInput';

const SeriesTextInput = (
  {
    label = 'Série',
    keyboardType = 'numeric',
    maxLength = 1,
    ...rest
  }: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return (
    <TextInput
      ref={ref}
      label={label}
      keyboardType={keyboardType}
      maxLength={maxLength}
      {...rest}
    />
  );
};

export default forwardRef(SeriesTextInput);
