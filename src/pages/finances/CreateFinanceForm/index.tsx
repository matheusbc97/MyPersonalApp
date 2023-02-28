import React, {useEffect, useRef} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  FinanceForm,
  IFinanceForm,
  FinanceFormHandles,
} from '@/shared/components';

import {ScreenProps} from '@/shared/types';
import useCreateFinance from '@/shared/hooks/requests/finances/useCreateFinance';
import {currencies} from '@/shared/constants/currencies';

const formInitialState: IFinanceForm = {
  name: '',
  paymentMethod: '',
  currency: currencies.real,
  day: null,
  group: null,
  type: 'expense',
  amount: '',
  fixedDate: true,
};

function CreateFinanceForm({navigation}: ScreenProps<'CreateFinanceForm'>) {
  const financeFormRef = useRef<FinanceFormHandles>(null);

  useEffect(() => {
    financeFormRef.current?.form.name?.focus();
  }, [financeFormRef]);

  const createFinance = useCreateFinance({
    onSuccess: () => {
      navigation.pop();
    },
  });

  const handleSubmitSuccess = async (form: IFinanceForm) => {
    let amount = Number(form.amount);

    if (form.type === 'expense') {
      amount *= -1;
    }

    createFinance({
      amount,
      fixedDate: true,
      day: Number(form.day),
      name: form.name,
      paymentMethod: form.paymentMethod,
    });
  };

  return (
    <ScreenWrapper pt={15}>
      <FinanceForm
        ref={financeFormRef}
        initialState={formInitialState}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <Row justifyEnd mt={20}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={() => financeFormRef.current?.submit()} />
      </Row>
    </ScreenWrapper>
  );
}

export default CreateFinanceForm;
