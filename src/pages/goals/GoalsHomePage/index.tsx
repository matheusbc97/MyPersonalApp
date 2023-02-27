import {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {
  CreateFab,
  FlatListWithFetchIndicator,
  GoalListItem,
  ScreenWrapper,
} from '@/shared/components';
import {useFetchGoals} from '@/shared/hooks';
import {Goal, ScreenProps} from '@/shared/types';

function GoalsHomePage({navigation}: ScreenProps<'GoalsHome'>) {
  const {goals, hasError, isLoading, refetchGoals} = useFetchGoals();

  const renderItem = useCallback(
    ({item: goal}: ListRenderItemInfo<Goal>) => (
      <GoalListItem
        onPress={() => navigation.navigate('GoalDetails', {goal})}
        mv={5}
        goal={goal}
      />
    ),
    [navigation],
  );

  return (
    <ScreenWrapper>
      <FlatListWithFetchIndicator
        data={goals}
        hasError={hasError}
        isLoading={isLoading}
        onRefresh={refetchGoals}
        emptyListText="Nenhuma meta encontrada"
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
      <CreateFab
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('CreateGoalForm')}
      />
    </ScreenWrapper>
  );
}

export default GoalsHomePage;
