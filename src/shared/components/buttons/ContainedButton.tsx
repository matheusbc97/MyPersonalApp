import theme from '@/assets/theme';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {shadow} from '@/shared/styles';

import Text from '../Text';

import Button from './Button';

export interface ContainedButtonProps {
  onPress?: () => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

const ContainedButton = ({onPress, text, style}: ContainedButtonProps) => {
  return (
    <Button
      onPress={onPress}
      style={[
        {
          backgroundColor: theme.primary,
          ...shadow,
          paddingHorizontal: 20,
          height: 40,
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 2,
        },
        style,
      ]}>
      <Text>{text}</Text>
    </Button>
  );
};

export default ContainedButton;
