import useEnhancedViewStyle, {
  EnhancedViewStyleProps,
} from '@/shared/hooks/useEnhancedViewStyle';
import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export interface RowProps extends EnhancedViewStyleProps {
  style?: StyleProp<ViewStyle>;
}

const Row = ({
  children,
  style,
  alignCenter = true,
  ...rest
}: PropsWithChildren<RowProps>) => {
  const enhancedViewStyle = useEnhancedViewStyle({
    ...rest,
    alignCenter,
  });

  return (
    <View style={[{flexDirection: 'row'}, enhancedViewStyle, style]}>
      {children}
    </View>
  );
};

export default Row;
