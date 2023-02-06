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
}

const Fab: React.FC<FabProps> = ({onPress, style, iconName = ''}) => {
  return (
    <Button
      onPress={onPress}
      style={[
        {
          width: 50,
          height: 50,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          ...shadow,
          backgroundColor: theme.primary,
        },
        style,
      ]}>
      <FontAwesome5 name={iconName} size={22} color={theme.secondary} />
    </Button>
  );
};

export default Fab;
