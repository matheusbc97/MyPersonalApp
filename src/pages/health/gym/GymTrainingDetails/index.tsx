import React from 'react';
import {ScrollView, View} from 'react-native';

import {
  ScreenWrapper,
  SubHeader,
  CreateFab,
  GymExerciseListItem,
  MapList,
  Row,
  DeleteIconButton,
  EditIconButton,
} from '@/shared/components';
import TitleWithSeparator from '@/shared/components/section-headers/TitleWithSeparatorSectionHeader';
import {useFetchGymExercises} from '@/shared/hooks';
import {GymExercise, ScreenProps} from '@/shared/types';
import useDeleteGymTraining from '@/shared/hooks/requests/gym/trainings/useDeleteGymTraining';

const GymTrainingDetails = ({
  navigation,
  route,
}: ScreenProps<'GymTrainingDetails'>) => {
  const gymTraining = route.params.gymTraining;

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
    deleteGym(gymTraining.id);
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

      <Row style={{marginHorizontal: 5}}>
        <DeleteIconButton onPress={handleDeleteGymTraining} />

        <EditIconButton onPress={handleEditGymTraining} />

        <View style={{flex: 1}} />

        <CreateFab onPress={handleCreateGymExercise} />
      </Row>
    </ScreenWrapper>
  );
};

export default GymTrainingDetails;
