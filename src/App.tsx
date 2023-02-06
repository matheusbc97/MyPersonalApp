import React from 'react';
import {View} from 'react-native';
import theme from '@/assets/theme';
import {LoadingHandler} from '@/shared/components';

import Navigation from './navigation/index';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: theme.background}}>
      <Navigation />
      <LoadingHandler />
    </View>
  );
};

export default App;
