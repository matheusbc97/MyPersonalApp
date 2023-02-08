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

import {createFinanceService} from '@/services/api/FinanceServices';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParams} from '@/navigation';
import {RouteProp} from '@react-navigation/core';
import {loaderHandler} from '@/shared/components/LoadingHandler';

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

interface Props {
  navigation: StackNavigationProp<StackParams, 'CreateFinanceForm'>;
  route: RouteProp<StackParams, 'CreateFinanceForm'>;
}

function CreateFinanceForm({route, navigation}: Props) {
  const financeFormRef = useRef<FinanceFormHandles>(null);

  useEffect(() => {
    financeFormRef.current?.form.name?.focus();
  }, [financeFormRef]);

  const handleSubmitSuccess = async (form: IFinanceForm) => {
    loaderHandler.showLoader();

    try {
      await createFinanceService({
        amount: Number(form.amount),
        currencyValue: form.currency!.value,
        fixedDate: true,
        day: Number(form.day),
        name: form.name,
        paymentMethod: form.paymentMethod,
        type: form.type!,
      });

      route.params.onFinanceCreated();
      navigation.pop();
    } catch (error) {}

    loaderHandler.hideLoader();
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
