import React, {useEffect} from 'react';
import {View} from 'react-native';

import {
  ScreenWrapper,
  NameTextInput,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
} from '@/shared/components';
import useForm from '@/shared/hooks/useForm';
import validations from '@/shared/utils/validations';

interface Form {
  name: string;
}

const validationScheme = {
  name: validations.name(),
};

const formInitialState: Form = {
  name: '',
};

const CreateBankAccountForm: React.FC = () => {
  const {formRef, handleFormInputProps, submitForm} = useForm<Form>(
    formInitialState,
    validationScheme,
  );

  useEffect(() => {
    formRef.current.name?.focus();
  }, [formRef]);

  const handleSavePress = () => {
    const {form, isValid} = submitForm();

    console.log('form', form);

    if (isValid) {
      //do something
    }
  };

  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <NameTextInput
          formProps={handleFormInputProps('name')}
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

export default CreateBankAccountForm;
