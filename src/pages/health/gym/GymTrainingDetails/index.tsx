import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

import {
  ScreenWrapper,
  SubHeader,
  CreateFab,
  GymExerciseListItem,
  MapList,
  Row,
  DeleteIconButton,
  EditIconButton,
  DeleteModal,
  DeleteModalHandles,
} from '@/shared/components';
import TitleWithSeparator from '@/shared/components/section-headers/TitleWithSeparatorSectionHeader';
import {useFetchGymExercises} from '@/shared/hooks';
import {GymExercise, ScreenProps} from '@/shared/types';
import useDeleteGymTraining from '@/shared/hooks/requests/gym/trainings/useDeleteGymTraining';
import Column from '@/shared/components/containers/Column';

const GymTrainingDetails = ({
  navigation,
  route,
}: ScreenProps<'GymTrainingDetails'>) => {
  const gymTraining = route.params.gymTraining;
  const deleteModalRef = useRef<DeleteModalHandles>(null);

  const {gymExercises, hasError, isLoading} = useFetchGymExercises(
    gymTraining.id,
  );

  const deleteGym = useDeleteGymTraining({
    onSuccess: () => {
      navigation.pop();
    },
  });

  const handleEditGymTraining = () => {
    navigation.navigate('UpdateGymTraining', {
      gymTraining: gymTraining,
    });
  };

  const handleCreateGymExercise = () => {
    navigation.navigate('CreateGymExerciseForm', {
      gymTrainingId: gymTraining.id,
    });
  };

  const handleOnGymExercisePress = (gymExercise: GymExercise) => {
    navigation.navigate('GymExerciseDetails', {
      gymExercise: gymExercise,
    });
  };

  const handleDeleteGymTraining = () => {
    deleteModalRef.current?.open(gymTraining.name);
  };

  return (
    <ScreenWrapper>
      <ScrollView style={{marginHorizontal: 5}}>
        <SubHeader iconName="dumbbell" title={gymTraining.name} />
        <TitleWithSeparator title="Exercícios" />
        <MapList
          emptyListText="Nenhum Item encontrado"
          data={gymExercises}
          hasError={hasError}
          isLoading={isLoading}
          renderItem={gymExercise => (
            <GymExerciseListItem
              key={gymExercise.id}
              gymExercise={gymExercise}
              onPress={() => handleOnGymExercisePress(gymExercise)}
            />
          )}
        />
      </ScrollView>

      <Row mh={5}>
        <DeleteIconButton onPress={handleDeleteGymTraining} />

        <EditIconButton onPress={handleEditGymTraining} />

        <Column flex={1} />

        <CreateFab onPress={handleCreateGymExercise} />
      </Row>

      <DeleteModal
        onConfirmPress={() => deleteGym(gymTraining.id)}
        ref={deleteModalRef}
      />
    </ScreenWrapper>
  );
};

export default GymTrainingDetails;
