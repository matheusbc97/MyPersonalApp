import React from 'react';

import {
  DeleteIconButton,
  EditIconButton,
  InfoWithLabel,
  Row,
  ScreenWrapper,
  Separator,
  Text,
} from '@/shared/components';
import {ScreenProps} from '@/shared/types';
import {GymExercisesItem} from '@/shared/types/GymExercise';
import {View} from 'react-native';
import {useDeleteGymExercise} from '@/shared/hooks';

interface Props {
  gymExercise: GymExercisesItem;
}

function GymExerciseItemListItem({gymExercise}: Props) {
  return (
    <>
      <InfoWithLabel label="Nome" text={gymExercise.name} />
      <Row>
        <InfoWithLabel label="Séries" text={gymExercise.series.toString()} />
        <Text style={{marginHorizontal: 20}}>X</Text>
        <InfoWithLabel
          label="Repetição"
          text={gymExercise.repetitions.toString()}
        />
      </Row>
      <Separator style={{marginVertical: 10}} />
    </>
  );
}

function GymExerciseDetails({
  navigation,
  route,
}: ScreenProps<'GymExerciseDetails'>) {
  const gymExercise = route.params.gymExercise;

  const deleteExercise = useDeleteGymExercise({
    onSuccess: () => {
      navigation.pop();
    },
  });

  const handleEditPress = () => {
    navigation.navigate('UpdateGymExerciseForm', {
      gymExercise,
    });
  };

  const handleDeletePress = () => {
    deleteExercise(gymExercise.id);
  };

  return (
    <ScreenWrapper style={{paddingTop: 15, paddingHorizontal: 15}}>
      <View style={{flex: 1}}>
        {gymExercise.exercisesItems.map(gymExercise => (
          <GymExerciseItemListItem gymExercise={gymExercise} />
        ))}
      </View>
      <Row>
        <DeleteIconButton onPress={handleDeletePress} />
        <EditIconButton onPress={handleEditPress} />
      </Row>
    </ScreenWrapper>
  );
}

export default GymExerciseDetails;
