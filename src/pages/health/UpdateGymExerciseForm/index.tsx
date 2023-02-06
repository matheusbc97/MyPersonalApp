import React, {useRef} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButton,
  GymExercisesFormList,
} from '@/shared/components';
import {GymExercisesFormListHandles} from '@/shared/components/forms/GymExercisesFormList';
import {updateGymExercisesService} from '@/services/api/GymService';
import {loaderHandler} from '@/shared/components/LoadingHandler';
import {ScreenProps} from '@/shared/types';

const UpdateGymExerciseForm = ({
  route,
  navigation,
}: ScreenProps<'UpdateGymExerciseForm'>) => {
  const formRef = useRef<GymExercisesFormListHandles>(null);

  const submitForm = async () => {
    if (formRef.current) {
      const {form, isValid} = formRef.current.submitExercisesFormList();

      if (isValid) {
        loaderHandler.showLoader();
        try {
          await updateGymExercisesService({
            exercisesItems: form,
            id: route.params.gymExercise.id,
          });
          route.params.onGymExerciseUpdated();
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
        initialState={route.params.gymExercise.exercisesItems.map(
          gymExerciseData => ({
            name: gymExerciseData.name,
            repetitions: gymExerciseData.repetitions,
            series: gymExerciseData.series,
            weight: gymExerciseData.weight,
          }),
        )}
      />

      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButton />
        <SaveContainedButton onPress={submitForm} />
      </Row>
    </ScreenWrapper>
  );
};

export default UpdateGymExerciseForm;
