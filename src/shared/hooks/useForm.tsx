import {useState, useRef, useCallback} from 'react';
import {TextInputHandles} from '@/shared/components';

export type HandleFormInputPropsReturn = {
  handleCreateRef: (ref: any) => void;
  handleBlur: () => void;
  handleValueChange: (text: any) => void;
  value: any;
  error: string | undefined;
};

export type HandleTextInputProps = (name: string) => {
  handleCreateRef: (ref: any) => void;
  handleBlur: () => void;
  handleValueChange: (text: string) => void;
  value: string;
  error: string | undefined | null;
};

const useForm = <T,>(initialState: T, validationScheme: any) => {
  type FormKey = keyof T;
  type FormReef = Record<FormKey, TextInputHandles | undefined>;

  const formRef = useRef({} as FormReef);

  const [values, setValues] = useState<T>(initialState);

  const [errors, setErrors] = useState<any>({});

  const submitForm = useCallback(() => {
    const newErrors: any = {};

    let formIsValid = true;

    Object.keys(values).forEach(key => {
      const value = values[key as FormKey];

      const error = validationScheme[key as FormKey]?.(value);

      newErrors[key] = error;

      if (error) {
        formIsValid = false;
      }
    });

    setErrors(oldState => ({
      ...oldState,
      ...newErrors,
    }));

    return {
      isValid: formIsValid,
      form: values,
    };
  }, [values, validationScheme]);

  const handleValueChange = <T extends FormKey>(name: T, value: Form[T]) => {
    setErrors(oldState => ({
      ...oldState,
      [name]: validationScheme[name]?.(value),
    }));

    setValues(oldState => ({
      ...oldState,
      [name]: value,
    }));
  };

  const handleBlur = <T extends FormKey>(name: T) => {
    const error = validationScheme[name]?.(values[name]);

    if (error !== errors[name]) {
      setErrors(oldState => ({
        ...oldState,
        [name]: error,
      }));
    }
  };

  const handleCreateRef = <T extends FormKey>(name: T, ref: any) => {
    formRef.current[name] = ref;
  };

  const handleFormInputProps: HandleTextInputProps<FormKey> = <
    T extends FormKey,
  >(
    name: T,
  ) => {
    return {
      handleCreateRef: (ref: any) => handleCreateRef(name, ref),
      handleBlur: () => handleBlur(name),
      handleValueChange: (text: string) => handleValueChange(name, text),
      value: values[name],
      error: errors[name],
    };
  };

  return {
    handleValueChange,
    handleCreateRef,
    submitForm,
    values,
    errors,
    formRef,
    handleBlur,
    handleFormInputProps,
  };
};

export default useForm;
