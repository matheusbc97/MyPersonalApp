import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';

import {
  ScreenWrapper,
  SubHeader,
  CreateFab,
  GymExerciseListItem,
  MapList,
  Row,
  IconButton,
  DeleteIconButton,
  EditIconButton,
} from '@/shared/components';
import TitleWithSeparator from '@/shared/components/section-headers/TitleWithSeparatorSectionHeader';
import {useFetchGymExercises} from '@/shared/hooks';
import {GymExercise, GymTraining, ScreenProps} from '@/shared/types';

const GymTrainingDetails = ({
  navigation,
  route,
}: ScreenProps<'GymTrainingDetails'>) => {
  const {getGymExercises, gymExercises, hasError, isLoading} =
    useFetchGymExercises();

  const gymTraining = route.params.gymTraining;

  useEffect(() => {
    getGymExercises(gymTraining.id);
  }, [getGymExercises, gymTraining.id]);

  const handleEditGymTraining = () => {
    navigation.navigate('UpdateGymTraining', {
      gymTraining: gymTraining,
    });
  };

  const handleCreateGymExercise = () => {
    navigation.navigate('CreateGymExerciseForm', {
      gymTrainingId: gymTraining.id,
      onGymExerciseCreated: () => {
        getGymExercises(gymTraining.id);
      },
    });
  };

  const handleOnGymExercisePress = (gymExercise: GymExercise) => {
    navigation.navigate('UpdateGymExerciseForm', {
      gymExercise: gymExercise,
      gymTrainingId: gymTraining.id,
      onGymExerciseUpdated: () => {
        getGymExercises(gymTraining.id);
      },
    });
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
        <DeleteIconButton
          style={{marginHorizontal: 5}}
          onPress={handleEditGymTraining}
        />

        <EditIconButton onPress={handleEditGymTraining} />

        <View style={{flex: 1}} />

        <CreateFab onPress={handleCreateGymExercise} />
      </Row>
    </ScreenWrapper>
  );
};

export default GymTrainingDetails;
