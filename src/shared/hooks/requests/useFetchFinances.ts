import {useQuery} from 'react-query';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {fetchFinancesService} from '@/services/api/FinanceServices';

const useFetchFinances = () => {
  const {data, isError, isLoading, refetch} = useQuery(
    QUERY_KEYS.FINANCES,
    fetchFinancesService,
  );

  return {
    finances: data ?? [],
    refetchFinances: refetch,
    isLoading,
    hasError: isError,
  };
};

export default useFetchFinances;
