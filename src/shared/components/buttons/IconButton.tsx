import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import Button from './Button';

export interface IconButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  iconName?: string;
}

const IconButton = ({onPress, style, iconName}: IconButtonProps) => {
  return (
    <Button
      onPress={onPress}
      style={[
        {
          padding: 10,
        },
        style,
      ]}>
      <FontAwesomeIcon color="#BDBDBD" size={30} name={iconName} />
    </Button>
  );
};

export default IconButton;
