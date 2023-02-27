import React, {PropsWithChildren} from 'react';
import {StatusBar, SafeAreaView, StyleProp, ViewStyle} from 'react-native';

import theme from '@/assets/theme';
import {EnhancedViewStyleProps} from '@/shared/hooks/useEnhancedViewStyle';
import Column from './Column';

interface ScreenWrapperProps extends EnhancedViewStyleProps {
  style?: StyleProp<ViewStyle>;
}

function ScreenWrapper({
  children,
  style,
  ...rest
}: PropsWithChildren<ScreenWrapperProps>) {
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: theme.background,
          flex: 1,
        },
      ]}>
      <StatusBar barStyle="light-content" />
      <Column flex={1} ph={15} pb={15} {...rest} style={style}>
        {children}
      </Column>
    </SafeAreaView>
  );
}

export default ScreenWrapper;
