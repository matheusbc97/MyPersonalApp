import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Icon, {IconFontFamily} from '../Icon';

import Button from './Button';

export interface IconButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
  iconName: string;
  fontFamily?: IconFontFamily;
  disabled?: boolean;
}

const IconButton = ({
  onPress,
  style,
  iconName,
  size = 30,
  fontFamily = 'FontAwesome',
  disabled,
}: IconButtonProps) => {
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          padding: 10,
        },
        style,
      ]}>
      <Icon
        color="#BDBDBD"
        fontFamily={fontFamily}
        size={size}
        name={iconName}
      />
    </Button>
  );
};

export default IconButton;
