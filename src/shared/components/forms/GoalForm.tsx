import React, {ForwardedRef, forwardRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {NameTextInput} from '@/shared/components';
import {FormHandles} from '@/shared/types';
import validations from '@/shared/utils/validations';
import useFormTemplate from '@/shared/hooks/useFormTemplate';

export interface IGoalForm {
  name: string;
}

export interface GoalFormHandles extends FormHandles<IGoalForm> {}

interface Props {
  initialState: IGoalForm;
  onSubmitSuccess?: (form: IGoalForm) => void;
  style?: StyleProp<ViewStyle>;
}

const validationScheme = {
  name: validations.name(),
};

const GoalForm = (
  {initialState, onSubmitSuccess}: Props,
  ref: ForwardedRef<GoalFormHandles>,
) => {
  const {handleFormInputProps} = useFormTemplate({
    initialState,
    onSubmitSuccess,
    ref,
    validationScheme,
  });

  return (
    <View style={{flex: 1}}>
      <NameTextInput formProps={handleFormInputProps('name')} />
    </View>
  );
};

export default forwardRef(GoalForm);
