import {useQuery} from 'react-query';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {fetchFinancesService} from '@/shared/services/api/finances';
import {FetchMonthlyFinancesParams} from '@/shared/services/api/finances/types';

const useFetchFinances = (params: FetchMonthlyFinancesParams) => {
  const {data, isError, isLoading, refetch} = useQuery(
    [QUERY_KEYS.FINANCES, params],
    () => fetchFinancesService(params),
  );

  return {
    finances: data ?? [],
    refetchFinances: refetch,
    isLoading,
    hasError: isError,
  };
};

export default useFetchFinances;
