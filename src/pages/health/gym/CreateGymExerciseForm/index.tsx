import React, {useRef} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  GymExercisesFormList,
} from '@/shared/components';
import {GymExercisesFormListHandles} from '@/shared/components/forms/GymExercisesFormList';

import {ScreenProps} from '@/shared/types';
import useCreateGymExercise from '@/shared/hooks/requests/gym/exercises/useCreateGymExercise';

const CreateGymExerciseForm = ({
  route,
  navigation,
}: ScreenProps<'CreateGymExerciseForm'>) => {
  const formRef = useRef<GymExercisesFormListHandles>(null);

  const createGymExercise = useCreateGymExercise({
    onSuccess: () => {
      navigation.pop();
    },
  });

  const submitForm = async () => {
    if (formRef.current) {
      const {form, isValid} = formRef.current.submitExercisesFormList();

      if (isValid) {
        createGymExercise({
          exercisesItems: form,
          trainingId: route.params.gymTrainingId,
        });
      }
    }
  };

  return (
    <ScreenWrapper>
      <GymExercisesFormList ref={formRef} style={{flex: 1}} />

      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={submitForm} />
      </Row>
    </ScreenWrapper>
  );
};

export default CreateGymExerciseForm;
