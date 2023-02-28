import React, {useRef} from 'react';

import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  FinanceNoteForm,
  FinanceNoteFormHandles,
} from '@/shared/components';
import {StackParams} from '@/navigation';
import {IFinanceNoteForm} from '@/shared/components/forms/FinanceNoteForm';
import {updateFinanceNoteService} from '@/shared/services/api/financesNotes';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import getCurrency from '@/shared/utils/getCurrency';

interface Props {
  navigation: StackNavigationProp<StackParams, 'UpdateFinanceNoteForm'>;
  route: RouteProp<StackParams, 'UpdateFinanceNoteForm'>;
}

const UpdateFinanceNoteForm = ({navigation, route}: Props) => {
  const formRef = useRef<FinanceNoteFormHandles>(null);
  const financeNote = route.params.financeNote;

  const handleSavePress = async (form: IFinanceNoteForm) => {
    try {
      const params = {
        currencyValue: form.currency!.value,
        amount: Number(form.amount),
        description: form.description,
        name: form.name,
        type: form.type!,
      };

      await requestWithScreenLoading(() =>
        updateFinanceNoteService(financeNote.id, params),
      );

      route.params.onFinanceNoteUpdated();
      navigation.pop();
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <FinanceNoteForm
        ref={formRef}
        initialState={{
          amount: String(financeNote.amount),
          currency: getCurrency(financeNote.currency),
          description: financeNote.description,
          name: financeNote.name,
          type: financeNote.type,
        }}
        onSubmitSuccess={handleSavePress}
        style={{flex: 1, marginVertical: 10}}
      />

      <Row justifyEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton
          style={{marginLeft: 5}}
          onPress={() => formRef.current?.submit()}
        />
      </Row>
    </ScreenWrapper>
  );
};

export default UpdateFinanceNoteForm;
