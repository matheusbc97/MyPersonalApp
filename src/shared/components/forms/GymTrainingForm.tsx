import React, {ForwardedRef, forwardRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {NameTextInput} from '@/shared/components';
import {FormHandles} from '@/shared/types';
import validations from '@/shared/utils/validations';
import useFormTemplate from '@/shared/hooks/useFormTemplate';

export interface IGymTrainingForm {
  name: string;
}

export interface GymTrainingFormHandles extends FormHandles<IGymTrainingForm> {}

interface Props {
  initialState: IGymTrainingForm;
  onSubmitSuccess: (form: IGymTrainingForm) => void;
  style?: StyleProp<ViewStyle>;
}

const validationScheme = {
  name: validations.name(),
};

const FinanceNoteForm = (
  {initialState, onSubmitSuccess}: Props,
  ref: ForwardedRef<GymTrainingFormHandles>,
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

export default forwardRef(FinanceNoteForm);
