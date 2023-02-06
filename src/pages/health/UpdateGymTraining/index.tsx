import React, {useRef} from 'react';

import {
  GymTrainingForm,
  GymTrainingFormHandles,
  IGymTrainingForm,
  SaveContainedButton,
  ScreenWrapper,
  SubHeader,
} from '@/shared/components';

import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import {ScreenProps} from '@/shared/types';
import {updateGymTrainingService} from '@/services';

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
