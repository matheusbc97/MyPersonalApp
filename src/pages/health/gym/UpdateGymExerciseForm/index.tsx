import React, {useRef} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButtonWithGoBack,
  GymExercisesFormList,
} from '@/shared/components';
import {GymExercisesFormListHandles} from '@/shared/components/forms/GymExercisesFormList';

import {loaderHandler} from '@/shared/components/LoadingHandler';
import {ScreenProps} from '@/shared/types';
import {updateGymExercisesService} from '@/shared/services';

const UpdateGymExerciseForm = ({
  route,
  navigation,
}: ScreenProps<'UpdateGymExerciseForm'>) => {
  const formRef = useRef<GymExercisesFormListHandles>(null);

  const gymExercise = route.params.gymExercise;

  const submitForm = async () => {
    if (formRef.current) {
      const {form, isValid} = formRef.current.submitExercisesFormList();

      if (isValid) {
        loaderHandler.showLoader();
        try {
          await updateGymExercisesService({
            exercisesItems: form,
            id: gymExercise.id,
          });
          navigation.pop();
        } catch (error) {
          console.log('error', error);
        }

        loaderHandler.hideLoader();
      }
    }
  };

  return (
    <ScreenWrapper>
      <GymExercisesFormList
        ref={formRef}
        style={{flex: 1}}
        initialState={gymExercise.exercisesItems.map(gymExerciseData => ({
          name: gymExerciseData.name,
          repetitions: gymExerciseData.repetitions,
          series: gymExerciseData.series,
          weight: gymExerciseData.weight,
        }))}
      />

      <Row justifyEnd style={{marginTop: 20}}>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={submitForm} />
      </Row>
    </ScreenWrapper>
  );
};

export default UpdateGymExerciseForm;
