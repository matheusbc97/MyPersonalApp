import {fetchWeightsService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useQuery} from 'react-query';

const useFetchWeights = () => {
  const {data, isLoading, isError} = useQuery(
    QUERY_KEYS.WEIGHTS,
    fetchWeightsService,
  );

  return {
    weights: data ?? [],
    isLoading,
    hasError: isError,
  };
};

export default useFetchWeights;
