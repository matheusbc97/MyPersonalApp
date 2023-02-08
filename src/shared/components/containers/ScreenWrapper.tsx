import React, {PropsWithChildren} from 'react';
import {
  StatusBar,
  SafeAreaView,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';

import theme from '@/assets/theme';

interface ScreenWrapperProps {
  style?: StyleProp<ViewStyle>;
}

function ScreenWrapper({
  children,
  style,
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
      <View
        style={[{flex: 1, paddingHorizontal: 10, paddingBottom: 15}, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default ScreenWrapper;
