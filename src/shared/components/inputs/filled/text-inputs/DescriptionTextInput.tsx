import React, {forwardRef, ForwardedRef} from 'react';

import TextInput, {TextInputHandles, TextInputProps} from '../../TextInput';

const DescriptionTextInput = (
  {label = 'Descrição', ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return <TextInput label={label} ref={ref} {...rest} />;
};

export default forwardRef(DescriptionTextInput);
