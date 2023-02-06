import React, {ForwardedRef, forwardRef} from 'react';

import TextInput, {TextInputHandles, TextInputProps} from './TextInput';

const ValueTextInput = (
  {label = 'Metodo de Pagamento', ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return <TextInput label={label} ref={ref} {...rest} />;
};

export default forwardRef(ValueTextInput);
