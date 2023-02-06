import React, {ForwardedRef, forwardRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {
  CurrencySelectInput,
  NameTextInput,
  Row,
  AmountTextInput,
  ReceiptRadioListInput,
  DescriptionTextInput,
  TextInputHandles,
} from '@/shared/components';
import {Currency, FinanceType} from '@/shared/types';
import validations from '@/shared/utils/validations';
import useFormTemplate from '@/shared/hooks/useFormTemplate';

export interface IFinanceNoteForm {
  name: string;
  description?: string;
  currency: Currency | null;
  amount: string;
  type: FinanceType | null;
}

interface FormHandles<T> {
  submit: () => void;
  form: Record<keyof T, TextInputHandles | undefined>;
}

export interface FinanceNoteFormHandles extends FormHandles<IFinanceNoteForm> {}

interface Props {
  initialState: IFinanceNoteForm;
  onSubmitSuccess: (form: IFinanceNoteForm) => void;
  style?: StyleProp<ViewStyle>;
}

const validationScheme = {
  name: validations.name(),
  description: validations.description(false),
  currency: validations.currency(),
  amount: validations.amount(),
  type: validations.financeType(),
};

const FinanceNoteForm = (
  {initialState, onSubmitSuccess}: Props,
  ref: ForwardedRef<FinanceNoteFormHandles>,
) => {
  const {handleFormInputProps, formRef, handleValueChange, values} =
    useFormTemplate({
      initialState,
      onSubmitSuccess,
      ref,
      validationScheme,
    });

  return (
    <View style={{flex: 1, marginVertical: 10}}>
      <NameTextInput
        formProps={handleFormInputProps('name')}
        onSubmitEditing={() => formRef.current.description?.focus()}
      />
      <DescriptionTextInput
        formProps={handleFormInputProps('description')}
        onSubmitEditing={() => {
          formRef.current.currency?.focus();
        }}
      />
      <Row>
        <CurrencySelectInput
          flex={1}
          formProps={handleFormInputProps('currency')}
          onModalClosedCallback={() => {
            formRef.current.amount?.focus();
          }}
        />
        <AmountTextInput flex={1} formProps={handleFormInputProps('amount')} />
      </Row>

      <ReceiptRadioListInput
        onChangeValue={financeType => {
          handleValueChange('type', financeType);
        }}
        value={values.type}
      />
    </View>
  );
};

export default forwardRef(FinanceNoteForm);
