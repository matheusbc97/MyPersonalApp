import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';

import Button from './Button';

export interface IconButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
  iconName?: string;
  fontFamily?: 'FontAwesome' | 'FontAwesome5';
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
      {fontFamily === 'FontAwesome' ? (
        <FontAwesomeIcon color="#BDBDBD" size={size} name={iconName} />
      ) : (
        <FontAwesomeIcon5 color="#BDBDBD" size={size} name={iconName} />
      )}
    </Button>
  );
};

export default IconButton;
