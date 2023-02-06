import React, {useRef} from 'react';

import {
  GymTrainingForm,
  GymTrainingFormHandles,
  SaveContainedButton,
  ScreenWrapper,
  SubHeader,
} from '@/shared/components';
import {ScreenProps} from '@/shared/types';
import useCreateGym from './useCreateGym';

function CreateGymTraining({navigation}: ScreenProps<'CreateGymTraining'>) {
  const formRef = useRef<GymTrainingFormHandles>(null);

  const handleGymTrainingSubmitSuccess = useCreateGym({
    onSuccess: () => {
      navigation.pop();
    },
  });

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