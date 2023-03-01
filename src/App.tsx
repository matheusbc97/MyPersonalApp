import {StatusBar} from 'react-native';
import theme from '@/assets/theme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {LoadingHandler} from '@/shared/components';

import Navigation from './navigation/index';
import {FabGroupProvider} from './shared/contexts/FabGroupContext';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <FabGroupProvider>
          <StatusBar backgroundColor={theme.primary} />
          <Navigation />
          <LoadingHandler />
        </FabGroupProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
