import React, {ForwardedRef, forwardRef} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import {
  NameTextInput,
  Row,
  ExerciseWeightTextInput,
  RepetitionsTextInput,
  SeriesTextInput,
  Text,
} from '@/shared/components';
import validations from '@/shared/utils/validations';
import {FormHandles} from '@/shared/types';
import useFormTemplate from '@/shared/hooks/useFormTemplate';

export interface GymExerciseForm {
  name: string;
  series: number;
  repetitions: number;
  weight: string;
}

const validationScheme = {
  name: validations.name(),
  series: validations.repetitions(),
  weight: validations.weight(),
  repetitions: validations.repetitions(),
};

const formInitialState: GymExerciseForm = {
  name: '',
  series: -1,
  repetitions: -1,
  weight: '',
};

interface GymExerciseFormProps {
  style?: StyleProp<ViewStyle>;
  initialState?: GymExerciseForm;
}

export interface GymExerciseFormHandles extends FormHandles<GymExerciseForm> {}

function GymExerciseFormTemplate(
  {style, initialState = formInitialState}: GymExerciseFormProps,
  ref: ForwardedRef<GymExerciseFormHandles>,
) {
  const {handleFormInputProps} = useFormTemplate({
    initialState,
    onSubmitSuccess: () => {},
    ref,
    validationScheme,
  });

  return (
    <View style={style}>
      <NameTextInput formProps={handleFormInputProps('name')} />
      <Row>
        <SeriesTextInput flex={1} formProps={handleFormInputProps('series')} />
        <Text>X</Text>
        <RepetitionsTextInput
          flex={2}
          formProps={handleFormInputProps('repetitions')}
        />
        <ExerciseWeightTextInput
          flex={3}
          formProps={handleFormInputProps('weight')}
        />
      </Row>
    </View>
  );
}

export default forwardRef(GymExerciseFormTemplate);
