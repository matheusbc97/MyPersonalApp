import React, {useRef, useState} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  FinanceForm,
  IFinanceForm,
  FinanceFormHandles,
  PaidRadioListInput,
} from '@/shared/components';

import {
  deletePaymentOfFinanceService,
  payFinanceService,
} from '@/services/api/FinanceServices';
import getCurrency from '@/shared/utils/getCurrency';
import {ScreenProps} from '@/shared/types';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import useUpdateFinance from '@/shared/hooks/requests/finances/useUpdateFinance';

function UpdateFinanceFormPage({
  route,
  navigation,
}: ScreenProps<'UpdateFinanceForm'>) {
  const financeFormRef = useRef<FinanceFormHandles>(null);
  const finance = route.params.finance;

  const [paid, setPaid] = useState(finance.paid);

  const updateFinance = useUpdateFinance();

  const handleSubmitSuccess = async (form: IFinanceForm) => {
    try {
      await updateFinance({
        id: finance.id,
        amount: Number(form.amount),
        fixedDate: true,
        day: Number(form.day),
        name: form.name,
        paymentMethod: form.paymentMethod,
      });

      navigation.pop();
    } catch {}
  };

  const handlePayFinance = async (pay: boolean) => {
    try {
      if (pay) {
        await requestWithScreenLoading(() =>
          payFinanceService({financeId: finance.id, date: new Date()}),
        );

        setPaid(true);
      } else {
        const paymentId = finance.paymentId;
        if (paymentId) {
          await requestWithScreenLoading(() =>
            deletePaymentOfFinanceService(paymentId),
          );

          setPaid(false);
        }
      }

      route.params.onFinanceUpdated();
    } catch (error) {}
  };

  const financeInitialState: IFinanceForm = {
    amount: String(finance.amount),
    currency: getCurrency(finance.currencyValue),
    day: String(finance.day),
    fixedDate: finance.fixedDate,
    group: finance.group,
    name: finance.name,
    paymentMethod: finance.paymentMethod,
    type: finance.amount > 0 ? 'receipt' : 'expense',
  };

  return (
    <ScreenWrapper>
      <FinanceForm
        ref={financeFormRef}
        initialState={financeInitialState}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <PaidRadioListInput
        style={{alignSelf: 'flex-end'}}
        onChangeValue={handlePayFinance}
        value={paid}
      />
      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={() => financeFormRef.current?.submit()} />
      </Row>
    </ScreenWrapper>
  );
}

export default UpdateFinanceFormPage;
