import {GymTraining} from '@/shared/types';
import React from 'react';

import Card from '../containers/Card';
import Text from '../Text';

interface GymTrainingListItemProps {
  gymTraining: GymTraining;
  onPress: () => void;
}

const GymTrainingListItem = ({
  gymTraining,
  onPress,
}: GymTrainingListItemProps) => {
  const {name} = gymTraining;
  return (
    <Card style={{marginVertical: 5}} onPress={onPress}>
      <Text type="title">{name}</Text>
    </Card>
  );
};

export default GymTrainingListItem;
