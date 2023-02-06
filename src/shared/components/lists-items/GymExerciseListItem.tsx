import React from 'react';
import {View} from 'react-native';

import {GymExercise} from '@/shared/types';

import Card from '../containers/Card';
import Row from '../containers/Row';
import Text from '../Text';

interface GymExerciseListItemProps {
  gymExercise: GymExercise;
  onPress: () => void;
}

const GymExerciseListItem = ({
  gymExercise,
  onPress,
}: GymExerciseListItemProps) => {
  return (
    <Card onPress={onPress} style={{paddingVertical: 5, marginVertical: 5}}>
      {gymExercise.exercisesItems.map(gymExerciseData => (
        <View style={{marginVertical: 5}}>
          <Row spaceBetween>
            <Text type="title">{gymExerciseData.name}</Text>
            <Text>
              {gymExerciseData.series}x{gymExerciseData.repetitions}
            </Text>
          </Row>
          <Text style={{marginTop: 5}}>Peso: {gymExerciseData.weight}</Text>
        </View>
      ))}
    </Card>
  );
};

export default GymExerciseListItem;
