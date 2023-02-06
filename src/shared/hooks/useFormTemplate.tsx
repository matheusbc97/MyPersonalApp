import {ForwardedRef, useImperativeHandle} from 'react';

import {TextInputHandles} from '@/shared/components';
import useForm from '@/shared/hooks/useForm';

interface FormHandles<T> {
  submit: () => {
    isValid: boolean;
    form: T;
  };
  form: Record<keyof T, TextInputHandles | undefined>;
}

interface UseFormTemplateParams<F, H extends FormHandles<F>> {
  initialState: F;
  validationScheme: any;
  onSubmitSuccess: (form: F) => void;
  ref: ForwardedRef<H>;
}

const useFormTemplate = <F, H extends FormHandles<F>>({
  initialState,
  validationScheme,
  onSubmitSuccess,
  ref,
}: UseFormTemplateParams<F, H>) => {
  const {
    handleValueChange,
    formRef,
    handleFormInputProps,
    submitForm,
    values,
    errors,
  } = useForm<F>(initialState, validationScheme);

  useImperativeHandle(
    ref,
    () => ({
      submit: () => {
        const {form, isValid} = submitForm();

        if (isValid) {
          onSubmitSuccess(form);
        }

        return {form, isValid};
      },
      form: formRef.current,
    }),
    [formRef, submitForm],
  );

  return {
    handleFormInputProps,
    handleValueChange,
    formRef,
    values,
    errors,
  };
};

export default useFormTemplate;
