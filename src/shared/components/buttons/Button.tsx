import React, {PropsWithChildren} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

function Button({
  children,
  onPress,
  style,
  disabled,
}: PropsWithChildren<ButtonProps>) {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
