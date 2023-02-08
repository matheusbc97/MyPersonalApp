import React from 'react';
import {View} from 'react-native';

import {GymExercise} from '@/shared/types';

import Card from '../containers/Card';
import Row from '../containers/Row';
import Text from '../Text';
import IconButton from '../buttons/IconButton';
import Separator from '../Separator';

interface GymExerciseListItemProps {
  gymExercise: GymExercise;
  onPress: () => void;
}

const GymExerciseListItem = ({
  gymExercise,
  onPress,
}: GymExerciseListItemProps) => {
  return (
    <Card onPress={onPress} style={{paddingVertical: 10, marginVertical: 5}}>
      {gymExercise.exercisesItems.map((gymExerciseData, index) => (
        <View>
          <Row spaceBetween>
            <Text type="title">{gymExerciseData.name}</Text>
            <Text>
              {gymExerciseData.series}x{gymExerciseData.repetitions}
            </Text>
          </Row>
          <Row spaceBetween style={{marginTop: 4}}>
            <Text>Peso: 4kg</Text>
            <IconButton
              size={20}
              iconName="dumbbell"
              fontFamily="FontAwesome5"
              style={{padding: 0}}
            />
          </Row>
          {index !== gymExercise.exercisesItems.length - 1 && (
            <Separator style={{marginVertical: 10}} />
          )}
        </View>
      ))}
    </Card>
  );
};

export default GymExerciseListItem;
