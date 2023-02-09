import {
  CreateFab,
  Fab,
  FlatListWithFetchIndicator,
  ScreenWrapper,
  Text,
} from '@/shared/components';
import {useFetchWeights} from '@/shared/hooks';
import {ScreenProps} from '@/shared/types';
import WeightListItem from './components/WeightListItem';

function WeightListPage({}: ScreenProps<'WeightList'>) {
  const {hasError, isLoading, weights} = useFetchWeights();

  return (
    <ScreenWrapper>
      <FlatListWithFetchIndicator
        data={weights}
        emptyListText="Nenhum peso encontrado"
        hasError={hasError}
        isLoading={isLoading}
        renderItem={({item}) => <WeightListItem weight={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <CreateFab onPress={() => {}} style={{alignSelf: 'flex-end'}} />
    </ScreenWrapper>
  );
}

export default WeightListPage;
