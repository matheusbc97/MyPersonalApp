import {StatusBar, View} from 'react-native';
import theme from '@/assets/theme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {LoadingHandler} from '@/shared/components';

import Navigation from './navigation/index';
import {DimBackgroundProvider} from './shared/contexts/DimBackgroundContext';
import {FabGroupProvider} from './shared/contexts/FabGroupContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FabGroupProvider>
        <StatusBar backgroundColor={theme.primary} />
        <Navigation />
        <LoadingHandler />
      </FabGroupProvider>
    </QueryClientProvider>
  );
};

export default App;
