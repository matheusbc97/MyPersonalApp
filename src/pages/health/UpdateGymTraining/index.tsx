import React, {useRef} from 'react';

import {
  GymTrainingForm,
  GymTrainingFormHandles,
  IGymTrainingForm,
  SaveContainedButton,
  ScreenWrapper,
  SubHeader,
} from '@/shared/components';
import {updateGymTrainingService} from '@/services/api/GymService';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import {ScreenProps} from '@/shared/types';

function UpdateGymTraining({
  navigation,
  route,
}: ScreenProps<'UpdateGymTraining'>) {
  const formRef = useRef<GymTrainingFormHandles>(null);

  const currentGymTraining = route.params.gymTraining;

  const handleGymTrainingSubmitSuccess = async (form: IGymTrainingForm) => {
    try {
      const newGymTraining = {
        id: currentGymTraining.id,
        name: form.name,
      };

      await requestWithScreenLoading(() =>
        updateGymTrainingService(newGymTraining),
      );

      route.params.onGymTrainingUpdated(newGymTraining);
      navigation.pop();
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <SubHeader iconName="dumbbell" title="Treinamentos" />
      <GymTrainingForm
        ref={formRef}
        initialState={{name: currentGymTraining.name}}
        onSubmitSuccess={handleGymTrainingSubmitSuccess}
      />
      <SaveContainedButton
        style={{alignSelf: 'flex-end'}}
        onPress={() => formRef.current?.submit()}
      />
    </ScreenWrapper>
  );
}

export default UpdateGymTraining;
