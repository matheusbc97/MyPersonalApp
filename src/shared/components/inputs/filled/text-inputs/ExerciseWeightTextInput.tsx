import React, {forwardRef, ForwardedRef} from 'react';

import TextInput, {TextInputHandles, TextInputProps} from '../../TextInput';

const ExerciseWeightTextInput = (
  {label = 'Peso', ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return <TextInput label={label} ref={ref} {...rest} />;
};

export default forwardRef(ExerciseWeightTextInput);
