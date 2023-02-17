import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

import useEnhancedViewStyle, {
  EnhancedViewStyleProps,
} from '@/shared/hooks/useEnhancedViewStyle';

export interface ColumnProps extends EnhancedViewStyleProps {
  style?: StyleProp<ViewStyle>;
}

const Column = ({children, style, ...rest}: PropsWithChildren<ColumnProps>) => {
  const enhancedViewStyle = useEnhancedViewStyle(rest);

  return <View style={[enhancedViewStyle, style]}>{children}</View>;
};

export default Column;
