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

const formInitialState: IFinanceForm = {
  name: '',
  paymentMethod: '',
  currency: null,
  day: null,
  group: null,
  type: null,
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
    createFinance({
      amount: Number(form.amount),
      fixedDate: true,
      day: Number(form.day),
      name: form.name,
      paymentMethod: form.paymentMethod,
    });
  };

  return (
    <ScreenWrapper>
      <FinanceForm
        ref={financeFormRef}
        initialState={formInitialState}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={() => financeFormRef.current?.submit()} />
      </Row>
    </ScreenWrapper>
  );
}

export default CreateFinanceForm;
