import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback,
  useLayoutEffect,
} from 'react';
import {useNavigation} from '@react-navigation/native';

import {TextInput} from '@/shared/components';
import {Country} from '@/shared/types';
import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

import {TextInputHandles} from './TextInput';

interface Props {
  flex?: number;
  onCountrySelected?: (country: Country) => void;
  error?: string;
  value?: Country;
  formProps?: HandleFormInputPropsReturn;
}

interface CountryInputHandles {
  focus: () => void;
}

const CountryInput = (
  {flex, onCountrySelected, error, value, formProps}: Props,
  ref: ForwardedRef<CountryInputHandles>,
) => {
  const navigation = useNavigation<any>();
  const inputRef = useRef<TextInputHandles>(null);

  const navigateToFinanceGroup = useCallback(() => {
    navigation.navigate('SelectCountry', {
      onSelectCountry: (country: Country) => {
        inputRef.current?.setText(country.name);
        onCountrySelected?.(country);
        formProps?.handleValueChange(country);
      },
    });
  }, [navigation, inputRef, onCountrySelected, formProps]);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        navigateToFinanceGroup();
      },
    }),
    [navigateToFinanceGroup],
  );

  useLayoutEffect(() => {
    formProps?.handleCreateRef(ref);
    formProps?.value && inputRef.current?.setText(formProps.value.title);
  }, [ref, formProps]);

  useEffect(() => {
    value && inputRef.current?.setText(value.name);
  }, [value]);

  return (
    <TextInput
      flex={flex}
      ref={inputRef}
      error={error}
      button
      label="País"
      onPress={navigateToFinanceGroup}
    />
  );
};

export default forwardRef(CountryInput);
