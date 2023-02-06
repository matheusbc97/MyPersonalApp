import SelectInputBase, {
  SelectInputBaseHandles,
  SelectInputBaseProps,
} from './SelectInputBase';

import React, {forwardRef, ForwardedRef} from 'react';

import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

export interface SelectInputProps<T> extends SelectInputBaseProps<T> {
  formProps?: HandleFormInputPropsReturn;
}

export interface SelectInputHandles extends SelectInputBaseHandles {}

const SelectInput = <T,>(
  {formProps, value, error, onSelectItem, ...rest}: SelectInputProps<T>,
  ref: ForwardedRef<SelectInputHandles>,
) => {
  return (
    <SelectInputBase
      onSelectItem={formProps?.handleValueChange ?? onSelectItem}
      value={formProps?.value ?? value}
      error={formProps?.error ?? error}
      ref={formProps?.handleCreateRef ?? ref}
      {...rest}
    />
  );
};

export default forwardRef(SelectInput) as <T>(
  props: SelectInputProps<T> & {ref?: React.ForwardedRef<any>},
) => ReturnType<typeof SelectInput>;
