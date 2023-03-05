import theme from '@/assets/theme';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {shadow} from '@/shared/styles';

import Text from '../Text';

import Button, {ButtonProps} from './Button';

export interface ContainedButtonProps extends ButtonProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
}

const ContainedButton = ({
  text,
  style,
  ...buttonProps
}: ContainedButtonProps) => {
  return (
    <Button
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
      ]}
      {...buttonProps}>
      <Text>{text}</Text>
    </Button>
  );
};

export default ContainedButton;
