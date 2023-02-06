import React, {ForwardedRef, forwardRef} from 'react';

import TextInput, {TextInputHandles, TextInputProps} from '../../TextInput';

const AmountTextInput = (
  {label = 'Valor', keyboardType = 'numeric', ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return (
    <TextInput ref={ref} label={label} keyboardType={keyboardType} {...rest} />
  );
};

export default forwardRef(AmountTextInput);
