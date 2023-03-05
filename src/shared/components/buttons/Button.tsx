import {useInsetsProps} from '@/shared/hooks';
import {InsetsProps} from '@/shared/hooks/useInsetsProps';
import React, {PropsWithChildren} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';

export interface ButtonProps extends InsetsProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

function Button({
  children,
  onPress,
  style,
  disabled,
  ...insetsProps
}: PropsWithChildren<ButtonProps>) {
  const insetsStyles = useInsetsProps(insetsProps);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[insetsStyles, style]}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
