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
import {PaymentMethod} from '@/shared/types';
import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

import {TextInputHandles} from './TextInput';

interface Props {
  flex?: number;
  onPaymentMethodSelect?: (paymentMethod: PaymentMethod) => void;
  error?: string;
  value?: PaymentMethod;
  formProps?: HandleFormInputPropsReturn;
}

interface PaymentMethodInputHandles {
  focus: () => void;
}

const PaymentMethodInput = (
  {flex, onPaymentMethodSelect, error, value, formProps}: Props,
  ref: ForwardedRef<PaymentMethodInputHandles>,
) => {
  const navigation = useNavigation<any>();
  const inputRef = useRef<TextInputHandles>(null);

  const navigateToFinancePaymentMethod = useCallback(() => {
    navigation.navigate('FinancesPaymentMethods', {
      onSelectPaymentMethod: (paymentMethod: PaymentMethod) => {
        inputRef.current?.setText(paymentMethod.name);
        onPaymentMethodSelect?.(paymentMethod);
        formProps?.handleValueChange(paymentMethod);
      },
    });
  }, [navigation, inputRef, onPaymentMethodSelect, formProps]);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        navigateToFinancePaymentMethod();
      },
    }),
    [navigateToFinancePaymentMethod],
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
      label="Metódo de pagamento"
      onPress={navigateToFinancePaymentMethod}
    />
  );
};

export default forwardRef(PaymentMethodInput);
