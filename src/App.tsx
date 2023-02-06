import React from 'react';
import {View} from 'react-native';
import theme from '@/assets/theme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {LoadingHandler} from '@/shared/components';

import Navigation from './navigation/index';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <View style={{flex: 1, backgroundColor: theme.background}}>
      <Navigation />
      <LoadingHandler />
    </View>
  </QueryClientProvider>
   
  );
};

export default App;