import React from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
