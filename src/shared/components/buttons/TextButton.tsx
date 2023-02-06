import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import Text from '../Text';

import Button from './Button';

export interface TextButtonProps {
  onPress?: () => void;
  text?: string;
  style?: StyleProp<ViewStyle>;
}

const TextButton = ({onPress, text, style}: TextButtonProps) => {
  return (
    <Button
      onPress={onPress}
      style={[
        {
          paddingVertical: 5,
          paddingHorizontal: 10,
        },
        style,
      ]}>
      <Text>{text}</Text>
    </Button>
  );
};

export default TextButton;
