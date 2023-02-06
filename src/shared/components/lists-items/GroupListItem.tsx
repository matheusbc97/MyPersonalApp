import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Group} from '@/shared/types';
import {Text, Card} from '@/shared/components';
import theme from '@/assets/theme';

interface Props {
  group: Group;
  onPress: () => void;
}

const FinanceListItem: React.FC<Props> = ({group, onPress}) => {
  return (
    <Card
      onPress={onPress}
      row
      style={{
        marginVertical: 5,
        justifyContent: 'space-between',
      }}>
      <Text type="title" style={{flex: 1}}>
        {group.title}
      </Text>

      <Icon name="pencil" color={theme.text} size={15} />
    </Card>
  );
};

export default FinanceListItem;
