import React, {ForwardedRef, forwardRef} from 'react';

import TextInput, {TextInputProps, TextInputHandles} from '../../TextInput';

const RepetitionsTextInput = (
  {
    label = 'Repetição',
    keyboardType = 'numeric',
    maxLength = 2,
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

export default forwardRef(RepetitionsTextInput);
