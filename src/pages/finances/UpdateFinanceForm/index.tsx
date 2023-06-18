import {useRef} from 'react';

import {
  CancelTextButtonWithGoBack,
  DeleteIconButtonWithModal,
  FinanceForm,
  FinanceFormHandles,
  IFinanceForm,
  PaidRadioListInput,
  Row,
  SaveContainedButton,
  ScreenWrapper,
} from '@/shared/components';

//import getCurrency from '@/shared/utils/getCurrency';
import {ScreenProps} from '@/shared/types';

import {useUpdateFinance} from '@/shared/hooks';
import useDeleteFinance from '@/shared/hooks/requests/finances/useDeleteFinance';
import usePaid from './hooks/usePaid';
import getFinanceInitialState from './utils/getFinanceInitialState';

function UpdateFinanceFormPage({
  route,
  navigation,
}: ScreenProps<'UpdateFinanceForm'>) {
  const financeFormRef = useRef<FinanceFormHandles>(null);
  const finance = route.params.finance;

  const {makePayment, paid} = usePaid({
    finance,
    initialValue: !!finance.payment,
  });

  const updateFinance = useUpdateFinance();

  const handleSubmitSuccess = async (form: IFinanceForm) => {
    try {
      await updateFinance({
        id: finance.id,
        amount: Number(form.amount),
        fixedDate: true,
        day: Number(form.day),
        name: form.name,
        paymentMethod: form.paymentMethod.name,
      });

      navigation.pop();
    } catch {}
  };

  const deleteFinance = useDeleteFinance();

  const handleDeleteFinance = async () => {
    try {
      await deleteFinance(finance.id);
      navigation.pop();
    } catch {}
  };

  return (
    <ScreenWrapper pt={15}>
      <FinanceForm
        ref={financeFormRef}
        initialState={getFinanceInitialState(finance)}
        onSubmitSuccess={handleSubmitSuccess}
      />
      <PaidRadioListInput
        style={{alignSelf: 'flex-end'}}
        onChangeValue={value => makePayment(value)}
        value={paid}
      />
      <Row spaceBetween>
        <DeleteIconButtonWithModal
          deleteText={finance.name}
          onConfirmPress={handleDeleteFinance}
        />
        <Row style={{marginTop: 20}}>
          <CancelTextButtonWithGoBack />
          <SaveContainedButton
            onPress={() => financeFormRef.current?.submit()}
          />
        </Row>
      </Row>
    </ScreenWrapper>
  );
}

export default UpdateFinanceFormPage;
