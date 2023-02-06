import React, {useEffect, useRef} from 'react';

import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButton,
  FinanceNoteForm,
  FinanceNoteFormHandles,
} from '@/shared/components';
import {currencies} from '@/shared/constants/currencies';
import {StackParams} from '@/navigation';
import {useCreateFinanceNote} from '@/shared/hooks';
import {IFinanceNoteForm} from '@/shared/components/forms/FinanceNoteForm';

interface Props {
  navigation: StackNavigationProp<StackParams, 'CreateFinanceNoteForm'>;
  route: RouteProp<StackParams, 'CreateFinanceNoteForm'>;
}

const formInitialState: IFinanceNoteForm = {
  name: '',
  currency: currencies.real,
  type: 'receipt',
  description: '',
  amount: '',
};

const CreateFinanceNoteForm = ({navigation, route}: Props) => {
  const formRef = useRef<FinanceNoteFormHandles>(null);
  const createFinanceNote = useCreateFinanceNote();

  useEffect(() => {
    formRef.current?.form.name?.focus();
  }, [formRef]);

  const handleSavePress = async (form: IFinanceNoteForm) => {
    try {
      await createFinanceNote({
        currencyValue: form.currency!.value,
        amount: Number(form.amount),
        description: form.description,
        name: form.name,
        type: form.type!,
      });

      route.params.onFinanceNoteCreated();
      navigation.pop();
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <FinanceNoteForm
        ref={formRef}
        initialState={formInitialState}
        onSubmitSuccess={handleSavePress}
        style={{flex: 1, marginVertical: 10}}
      />

      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButton />
        <SaveContainedButton
          style={{marginLeft: 5}}
          onPress={() => formRef.current?.submit()}
        />
      </Row>
    </ScreenWrapper>
  );
};

export default CreateFinanceNoteForm;
