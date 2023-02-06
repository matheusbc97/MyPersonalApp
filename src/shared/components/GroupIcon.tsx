import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '@/assets/theme';

interface GroupIconProps {}

const GroupIcon: React.FC<GroupIconProps> = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: theme.secondary,
      }}>
      <Icon name="pencil" size={15} />
    </View>
  );
};

export default GroupIcon;
