import React, {useRef} from 'react';

import {
  CancelTextButtonWithGoBack,
  GymTrainingForm,
  GymTrainingFormHandles,
  Row,
  SaveContainedButton,
  ScreenWrapper,
  SubHeader,
} from '@/shared/components';
import {ScreenProps} from '@/shared/types';
import useCreateGymTraining from '@/shared/hooks/requests/gym/trainings/useCreateGymTraining';

function CreateGymTraining({navigation}: ScreenProps<'CreateGymTraining'>) {
  const formRef = useRef<GymTrainingFormHandles>(null);

  const handleGymTrainingSubmitSuccess = useCreateGymTraining({
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
      <Row flexEnd>
        <CancelTextButtonWithGoBack />
        <SaveContainedButton onPress={() => formRef.current?.submit()} />
      </Row>
    </ScreenWrapper>
  );
}

export default CreateGymTraining;
