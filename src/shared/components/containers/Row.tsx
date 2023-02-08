import useEnhancedViewStyle, {
  EnhancedViewProps,
} from '@/shared/hooks/useEnhancedViewStyle';
import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface RowProps extends EnhancedViewProps {
  style?: StyleProp<ViewStyle>;
}

const Row = ({children, style, ...rest}: PropsWithChildren<RowProps>) => {
  const enhancedViewStyle = useEnhancedViewStyle(rest);

  return (
    <View style={[{flexDirection: 'row'}, enhancedViewStyle, style]}>
      {children}
    </View>
  );
};

export default Row;
