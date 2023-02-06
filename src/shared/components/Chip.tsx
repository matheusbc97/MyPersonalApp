import React from 'react';
import {View} from 'react-native';

import Text from '@/shared/components/Text';

import theme from '@/assets/theme';

interface ChipProps {
  label: string;
}

const Chip = ({label}: ChipProps) => {
  return (
    <View
      style={{
        backgroundColor: theme.primary,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 999,
        margin: 2,
      }}>
      <Text>{label}</Text>
    </View>
  );
};

export default Chip;
