import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import theme from '@/assets/theme';
import Text from '@/shared/components/Text';

interface PaidChipProps {
  style?: StyleProp<ViewStyle>;
}

const PaidChip: React.FC<PaidChipProps> = ({style}) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 4,
          borderRadius: 3,
          backgroundColor: theme.secondary,
          height: 25,
        },
        style,
      ]}>
      <Text type="secondary">Pago</Text>
    </View>
  );
};

export default PaidChip;
