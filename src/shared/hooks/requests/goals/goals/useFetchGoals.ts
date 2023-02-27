import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useQuery} from 'react-query';
import {fetchGoalService} from '@/shared/services/api/goals';

const useFetchGoals = () => {
  const {data, isLoading, isError, refetch} = useQuery(
    QUERY_KEYS.GOALS,
    fetchGoalService,
  );

  return {
    goals: data ?? [],
    refetchGoals: refetch,
    isLoading,
    hasError: isError,
  };
};

export default useFetchGoals;
