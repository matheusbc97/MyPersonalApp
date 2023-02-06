import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import theme from '@/assets/theme';

interface CircleProps {
  size?: number;
  outlined?: boolean;
  style?: StyleProp<ViewStyle>;
  center?: boolean;
}

const Circle: React.FC<CircleProps> = ({
  children,
  size = 30,
  outlined,
  style,
  center,
}) => {
  let _style: ViewStyle = {
    width: size,
    height: size,
    backgroundColor: theme.secondary,
    borderRadius: Math.ceil(size),
  };

  if (outlined) {
    _style = {
      ..._style,
      backgroundColor: undefined,
      borderWidth: 1,
      borderColor: 'white',
    };
  } else {
    _style = {
      ..._style,
      backgroundColor: theme.secondary,
    };
  }

  if (center) {
    _style = {
      ..._style,
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  return <View style={[_style, style]}>{children}</View>;
};

export default Circle;
