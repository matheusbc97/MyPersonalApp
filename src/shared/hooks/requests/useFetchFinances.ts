import {fetchFinancesService} from '@/services/api/FinanceServices';
import useRequest from './useRequest';

const useFetchFinances = () => {
  const {data, getData, hasError, isLoading} = useRequest(fetchFinancesService);

  return {
    finances: data ?? [],
    getFinances: getData,
    isLoading,
    hasError,
  };
};

export default useFetchFinances;
