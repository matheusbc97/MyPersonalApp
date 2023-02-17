import React, {useEffect} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  DueDayTextInput,
  LastFourDigitsTextInput,
  ExpiringDateInput,
} from '@/shared/components';
import useForm from '@/shared/hooks/useForm';
import validations from '@/shared/utils/validations';
import {View} from 'react-native';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import {createCreditCardService} from '@/shared/services/api/BanksService';
import {ScreenProps} from '@/shared/types';

interface Form {
  lastFourDigits: string;
  dueDay: string;
  expiringDate: string | null;
}

const validationScheme = {
  lastFourDigits: validations.lastFourDigits(),
  dueDay: validations.day(),
  expiringDate: validations.expiringDate(),
};

const formInitialState: Form = {
  lastFourDigits: '',
  dueDay: '',
  expiringDate: null,
};

const CreateCreditCard = ({route}: ScreenProps<'CreateCreditCardForm'>) => {
  const {formRef, handleFormInputProps, submitForm} = useForm<Form>(
    formInitialState,
    validationScheme,
  );

  useEffect(() => {
    formRef.current.lastFourDigits?.focus();
  }, [formRef]);

  const handleSavePress = () => {
    const {form, isValid} = submitForm();

    if (isValid) {
      requestWithScreenLoading(() =>
        createCreditCardService({
          dueDay: Number(form.dueDay),
          expiringDate: form.expiringDate!,
          lastFourDigits: form.lastFourDigits,
          bankId: route.params.bank.id,
        }),
      );
    }
  };

  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <LastFourDigitsTextInput
          formProps={handleFormInputProps('lastFourDigits')}
          //onSubmitEditing={() => {}}
        />
        <DueDayTextInput
          formProps={handleFormInputProps('dueDay')}
          //onSubmitEditing={() => {}}
        />
        <ExpiringDateInput
          formProps={handleFormInputProps('expiringDate')}
          //onSubmitEditing={() => {}}
        />
      </View>

      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={handleSavePress} />
      </Row>
    </ScreenWrapper>
  );
};

export default CreateCreditCard;
