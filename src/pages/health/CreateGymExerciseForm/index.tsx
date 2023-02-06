import React, {useRef} from 'react';

import {
  ScreenWrapper,
  Row,
  SaveContainedButton,
  CancelTextButton,
  GymExercisesFormList,
} from '@/shared/components';
import {GymExercisesFormListHandles} from '@/shared/components/forms/GymExercisesFormList';
import {createGymExercisesService} from '@/services/api/GymService';
import {loaderHandler} from '@/shared/components/LoadingHandler';
import {ScreenProps} from '@/shared/types';

const CreateGymExerciseForm = ({
  route,
}: ScreenProps<'CreateGymExerciseForm'>) => {
  const formRef = useRef<GymExercisesFormListHandles>(null);

  const submitForm = async () => {
    if (formRef.current) {
      const {form, isValid} = formRef.current.submitExercisesFormList();

      if (isValid) {
        loaderHandler.showLoader();
        try {
          await createGymExercisesService({
            gymExercises: form,
            gymTrainingId: route.params.gymTrainingId,
          });
        } catch (error) {
          console.log('error', error);
        }

        loaderHandler.hideLoader();
      }
    }
  };

  return (
    <ScreenWrapper>
      <GymExercisesFormList ref={formRef} style={{flex: 1}} />

      <Row flexEnd style={{marginTop: 20}}>
        <CancelTextButton />
        <SaveContainedButton onPress={submitForm} />
      </Row>
    </ScreenWrapper>
  );
};

export default CreateGymExerciseForm;
