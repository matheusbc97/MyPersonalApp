import React, {PropsWithChildren} from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';

import theme from '@/assets/theme';

function ScreenWrapper({children}: PropsWithChildren) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: theme.background,
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 1, paddingHorizontal: 10, paddingBottom: 15}}>
        {children}
      </View>
    </SafeAreaView>
  );
}

export default ScreenWrapper;
