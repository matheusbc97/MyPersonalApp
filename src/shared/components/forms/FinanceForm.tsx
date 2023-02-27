import React, {ForwardedRef, forwardRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {
  CurrencySelectInput,
  NameTextInput,
  Row,
  AmountTextInput,
  ReceiptRadioListInput,
  DayTextInput,
  FinanceDateTypeSelectInput,
  GroupInput,
  PaymentMethodInput,
} from '@/shared/components';
import {Currency, FinanceType, FormHandles, Group} from '@/shared/types';
import validations from '@/shared/utils/validations';
import useFormTemplate from '@/shared/hooks/useFormTemplate';
import {financesDateTypes} from '@/shared/constants/financeDateTypes';

export interface IFinanceForm {
  name: string;
  paymentMethod: string;
  currency: Currency | null;
  amount: string;
  group: Group | null;
  type: FinanceType | null;
  day: string | null;
  fixedDate: boolean;
}

export interface FinanceFormHandles extends FormHandles<IFinanceForm> {}

interface Props {
  initialState: IFinanceForm;
  onSubmitSuccess: (form: IFinanceForm) => void;
  style?: StyleProp<ViewStyle>;
}

const validationScheme = {
  name: validations.name(),
  paymentMethod: validations.paymentMethod(),
  currency: validations.currency(),
  amount: validations.amount(),
  group: validations.group(),
  day: validations.day(),
  type: validations.financeType(),
  financeDateType: validations.financeDateType(),
};

const FinanceNoteForm = (
  {initialState, onSubmitSuccess}: Props,
  ref: ForwardedRef<FinanceFormHandles>,
) => {
  const {handleFormInputProps, formRef, handleValueChange, values, errors} =
    useFormTemplate({
      initialState,
      onSubmitSuccess,
      ref,
      validationScheme,
    });

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NameTextInput
          formProps={handleFormInputProps('name')}
          onSubmitEditing={() => formRef.current.paymentMethod?.focus()}
        />
        <PaymentMethodInput
          formProps={handleFormInputProps('paymentMethod')}
          onSubmitEditing={() => formRef.current.currency?.focus()}
        />
        <Row>
          <CurrencySelectInput
            flex={1}
            formProps={handleFormInputProps('currency')}
            onModalClosedCallback={() => formRef.current.amount?.focus()}
          />
          <AmountTextInput
            flex={1}
            formProps={handleFormInputProps('amount')}
          />

          <GroupInput
            onGroupSelect={group => handleValueChange('group', group)}
            error={errors.group}
            flex={2}
          />
        </Row>
        <Row>
          <FinanceDateTypeSelectInput
            flex={1}
            error={errors.fixedDate}
            onSelectItem={dateType =>
              handleValueChange('fixedDate', dateType.value === 'fixo')
            }
            value={
              values.fixedDate
                ? financesDateTypes.fixed
                : financesDateTypes.variable
            }
          />

          <DayTextInput flex={1} formProps={handleFormInputProps('day')} />
        </Row>
        <ReceiptRadioListInput
          onChangeValue={financeType => {
            handleValueChange('type', financeType);
          }}
          value={values.type}
        />
      </View>
    </View>
  );
};

export default forwardRef(FinanceNoteForm);
