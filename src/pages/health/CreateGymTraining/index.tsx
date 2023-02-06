import React, {useRef} from 'react';

import {
  GymTrainingForm,
  GymTrainingFormHandles,
  IGymTrainingForm,
  SaveContainedButton,
  ScreenWrapper,
  SubHeader,
} from '@/shared/components';
import {createGymTrainingService} from '@/services/api/GymService';
import requestWithScreenLoading from '@/shared/utils/requestWithScreenLoading';
import {ScreenProps} from '@/shared/types';

function CreateGymTraining({
  navigation,
  route,
}: ScreenProps<'CreateGymTraining'>) {
  const formRef = useRef<GymTrainingFormHandles>(null);

  const handleGymTrainingSubmitSuccess = async (form: IGymTrainingForm) => {
    try {
      await requestWithScreenLoading(() =>
        createGymTrainingService({
          name: form.name,
        }),
      );

      route.params.onGymTrainingCreated();
      navigation.pop();
    } catch (error) {}
  };

  return (
    <ScreenWrapper>
      <SubHeader iconName="dumbbell" title="Treinamentos" />
      <GymTrainingForm
        ref={formRef}
        initialState={{name: ''}}
        onSubmitSuccess={handleGymTrainingSubmitSuccess}
      />
      <SaveContainedButton
        style={{alignSelf: 'flex-end'}}
        onPress={() => formRef.current?.submit()}
      />
    </ScreenWrapper>
  );
}

export default CreateGymTraining;
