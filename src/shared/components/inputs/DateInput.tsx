import React, {
  ForwardedRef,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
  useImperativeHandle,
} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import formatDate from '@/shared/utils/formatDate';
import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

import TextInput, {TextInputHandles} from './TextInput';

export interface DateInputProps {
  label: string;
  onChangeText?: (text: string) => void;
  value?: Date;
  error?: string;
  formProps?: HandleFormInputPropsReturn;
}

interface DateInputHandles {
  focus: () => void;
}

function DateInput(
  {label, onChangeText, value, error, formProps}: DateInputProps,
  ref: ForwardedRef<DateInputHandles>,
) {
  const [datePickerIsVisible, setDatePickerIsVisible] = useState(false);
  const inputRef = useRef<TextInputHandles>(null);

  useLayoutEffect(() => {
    formProps?.handleCreateRef(ref);
  }, [ref, formProps]);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        setDatePickerIsVisible(true);
      },
    }),
    [],
  );

  return (
    <>
      <TextInput
        ref={inputRef}
        flex={1}
        mask={oldValue => formatDate(oldValue)}
        label={label}
        button
        value={
          formProps?.value ? formatDate(formProps.value) : value?.toString()
        }
        onChangeText={onChangeText}
        onPress={() => setDatePickerIsVisible(true)}
        error={formProps?.error ?? error}
      />
      <DateTimePickerModal
        date={formProps?.value ?? value}
        isVisible={datePickerIsVisible}
        mode="date"
        onConfirm={newDate => {
          //inputRef.current?.setText(formatDate(newDate));

          setDatePickerIsVisible(false);

          formProps?.handleValueChange(newDate);
        }}
        onCancel={() => setDatePickerIsVisible(false)}
      />
    </>
  );
}

export default forwardRef(DateInput);
