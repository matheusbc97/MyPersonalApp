import React, {useRef, useState} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButton,
  FinanceForm,
  IFinanceForm,
  FinanceFormHandles,
  PaidRadioListInput,
} from '@/shared/components';

import {
  deletePaymentOfFinanceService,
  payFinanceService,
  updateFinanceService,
} from '@/services/api/FinanceServices';
import getCurrency from '@/shared/utils/getCurrency';
import {ScreenProps} from '@/shared/types';
import {loaderHandler} from '@/shared/components/LoadingHandler';
import handleErrorMessage from '@/shared/utils/handleErrorMessage';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';

function UpdateFinanceFormPage({
  route,
  navigation,
}: ScreenProps<'UpdateFinanceForm'>) {
  const financeFormRef = useRef<FinanceFormHandles>(null);
  const finance = route.params.finance;

  console.log('finance', finance);
  const [paid, setPaid] = useState(finance.paid);

  const handleSubmitSuccess = async (form: IFinanceForm) => {
    loaderHandler.showLoader();

    try {
      await updateFinanceService(finance.id, {
        amount: Number(form.amount),
        currencyValue: form.currency!.value,
        fixedDate: true,
        day: Number(form.day),
        name: form.name,
        paymentMethod: form.paymentMethod,
        type: form.type!,
      });

      route.params.onFinanceUpdated();
      navigation.pop();
    } catch (error) {
      handleErrorMessage(error);
    }

    loaderHandler.hideLoader();
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

  return (
    <ScreenWrapper>
      <FinanceForm
        ref={financeFormRef}
        initialState={{
          amount: String(finance.amount),
          currency: getCurrency(finance.currencyValue),
          day: String(finance.day),
          fixedDate: finance.fixedDate,
          group: finance.group,
          name: finance.name,
          paymentMethod: finance.paymentMethod,
          type: finance.type,
        }}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <PaidRadioListInput
        style={{alignSelf: 'flex-end'}}
        onChangeValue={handlePayFinance}
        value={paid}
      />
      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButton />
        <SaveContainedButton onPress={() => financeFormRef.current?.submit()} />
      </Row>
    </ScreenWrapper>
  );
}

export default UpdateFinanceFormPage;
