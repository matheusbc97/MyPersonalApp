import React, {forwardRef, ForwardedRef} from 'react';

import TextInputBase, {
  TextInputBaseHandles,
  TextInputBaseProps,
} from './TextInputBase';

import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

export interface TextInputProps extends TextInputBaseProps {
  formProps?: HandleFormInputPropsReturn;
}

export interface TextInputHandles extends TextInputBaseHandles {}

const TextInput = (
  {formProps, onBlur, value, error, onChangeText, ...rest}: TextInputProps,
  ref: ForwardedRef<TextInputHandles>,
) => {
  return (
    <TextInputBase
      onBlur={formProps?.handleBlur ?? onBlur}
      onChangeText={formProps?.handleValueChange ?? onChangeText}
      value={formProps?.value ?? value}
      error={formProps?.error ?? error}
      ref={formProps?.handleCreateRef ?? ref}
      {...rest}
    />
  );
};

export default forwardRef(TextInput);
