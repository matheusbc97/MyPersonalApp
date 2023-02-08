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
import {createBankService} from '@/services/api/BanksService';
import {loaderHandler} from '@/shared/components/LoadingHandler';
import {ScreenProps} from '@/shared/types';

interface Form {
  name: string;
}

const validationScheme = {
  name: validations.name(),
};

const formInitialState: Form = {
  name: '',
};

const CreateBankForm = ({navigation, route}: ScreenProps<'CreateBankForm'>) => {
  const {formRef, handleFormInputProps, submitForm} = useForm<Form>(
    formInitialState,
    validationScheme,
  );

  useEffect(() => {
    formRef.current.name?.focus();
  }, [formRef]);

  const handleSavePress = async () => {
    const {form, isValid} = submitForm();

    if (isValid) {
      loaderHandler.showLoader();

      try {
        await createBankService({
          name: form.name,
          type: 'personal',
        });

        route.params.onBankCreated();
        navigation.pop();
      } catch (error) {}

      loaderHandler.hideLoader();
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

export default CreateBankForm;
