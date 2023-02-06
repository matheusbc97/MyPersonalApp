import React, {forwardRef, ForwardedRef} from 'react';

import TextInput, {TextInputHandles, TextInputProps} from '../../TextInput';

const NameTextInput = (
  {label = 'Nome', ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return <TextInput label={label} ref={ref} {...rest} />;
};

export default forwardRef(NameTextInput);
