import React, {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import theme from '@/assets/theme';
import {shadow} from '@/shared/styles';
import Button from '../buttons/Button';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  row?: boolean;
}

const Card = ({
  children,
  style,
  onPress,
  row = false,
}: PropsWithChildren<CardProps>) => {
  const getStyle = () => {
    const containerStyle: ViewStyle = {
      backgroundColor: theme.surface,
      ...shadow,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 2,
    };

    if (row) {
      containerStyle.flexDirection = 'row';
      containerStyle.alignItems = 'center';
    }

    return containerStyle;
  };

  return (
    <Button onPress={onPress} style={[getStyle(), style]}>
      {children}
    </Button>
  );
};

export default Card;
