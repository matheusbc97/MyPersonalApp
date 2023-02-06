import React, {ForwardedRef, forwardRef} from 'react';

import TextInput, {TextInputProps, TextInputHandles} from '../../TextInput';

const LastFourDigitsTextInput = (
  {
    label = 'Últimos 4 digítos',
    keyboardType = 'numeric',
    maxLength = 4,
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

export default forwardRef(LastFourDigitsTextInput);
