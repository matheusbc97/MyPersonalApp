import React from 'react';

import {
  CancelTextButton,
  CountryInput,
  DescriptionTextInput,
  NameTextInput,
  Row,
  SaveContainedButton,
  ScreenWrapper,
} from '@/shared/components';
import {useForm} from '@/shared/hooks';
import validations from '@/shared/utils/validations';
import {View} from 'react-native';

const formInitialState = {
  name: '',
  country: null,
  description: '',
};

const validationScheme = {
  name: validations.name(),
  country: validations.country(),
  description: validations.description(),
};

export default function CreateNewCityLinkPage() {
  const {handleFormInputProps, values, handleValueChange, errors} = useForm(
    formInitialState,
    validationScheme,
  );

  console.log('values', values);

  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <Row>
          <NameTextInput
            style={{flex: 1}}
            formProps={handleFormInputProps('name')}
          />
          <CountryInput
            flex={1}
            onCountrySelected={country => handleValueChange('country', country)}
            error={errors.group}
          />
        </Row>
        <DescriptionTextInput formProps={handleFormInputProps('description')} />
      </View>
      <Row flexEnd>
        <CancelTextButton />
        <SaveContainedButton />
      </Row>
    </ScreenWrapper>
  );
}
