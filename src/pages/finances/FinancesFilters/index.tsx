import React from 'react';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

import {StackParams} from '@/navigation';
import {
  ScreenWrapper,
  Row,
  PaidRadioListInput,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  DateInput,
  GroupInput,
} from '@/shared/components';
import {useGoBackOnlyOneTime, useForm} from '@/shared/hooks';
import validations from '@/shared/utils/validations';
import {Group} from '@/shared/types';

interface Props {
  navigation: StackNavigationProp<StackParams, 'FinancesFilters'>;
  route: RouteProp<StackParams, 'FinancesFilters'>;
}

export interface FinancesFilterForm {
  paid: boolean;
  group: Group | null;
  from: Date | null;
  until: Date | null;
}

export interface FinancesFiltersPageParams {
  onFiltersSelect: (financesFilterForm: FinancesFilterForm) => void;
  initialFormState?: FinancesFilterForm | null;
}

const validationScheme = {
  from: validations.fromDate(false),
  until: validations.untilDate(false),
};

const initialFormState: FinancesFilterForm = {
  paid: false,
  group: null,
  from: null,
  until: null,
};

const FinancesFilters = ({route}: Props) => {
  const goBack = useGoBackOnlyOneTime();

  const {handleValueChange, values, handleFormInputProps, submitForm} = useForm(
    route.params.initialFormState ?? initialFormState,
    validationScheme,
  );

  return (
    <ScreenWrapper>
      <View style={{flex: 1, marginTop: 10}}>
        <Row>
          <DateInput label="De" formProps={handleFormInputProps('from')} />
          <DateInput label="Até" formProps={handleFormInputProps('until')} />
        </Row>
        <Row>
          <GroupInput flex={1} formProps={handleFormInputProps('group')} />
          <View style={{flex: 1}} />
        </Row>
      </View>
      <Row flexEnd>
        <PaidRadioListInput
          value={values.paid}
          onChangeValue={value => handleValueChange('paid', value)}
        />
      </Row>
      <Row spaceBetween style={{marginTop: 30}}>
        <View />
        <Row>
          <CancelTextButtonWithGoBack
            style={{marginRight: 10}}
            onPress={goBack}
          />
          <SaveContainedButton
            onPress={() => {
              const {isValid, form} = submitForm();

              if (isValid) {
                route.params.onFiltersSelect(form);
                goBack();
              }
            }}
          />
        </Row>
      </Row>
    </ScreenWrapper>
  );
};

export default FinancesFilters;
