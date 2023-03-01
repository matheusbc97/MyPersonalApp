import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import theme from '@/assets/theme';
import {shadow} from '@/shared/styles';

import Button from './Button';

export interface FabProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconName?: string;
  size?: number;
}

const Fab: React.FC<FabProps> = ({
  onPress,
  style,
  size = 54,
  iconName = '',
}) => {
  return (
    <Button
      onPress={onPress}
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2 + 1,
          justifyContent: 'center',
          alignItems: 'center',
          ...shadow,
          backgroundColor: theme.primary,
        },
        style,
      ]}>
      <FontAwesome5 name={iconName} size={size * 0.5} color={theme.secondary} />
    </Button>
  );
};

export default Fab;
