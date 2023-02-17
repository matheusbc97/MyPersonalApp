import {fetchFinanceNotesService} from '@/services/api/financesNotes';
import useRequest from './useRequest';

const useFetchFinancesNotes = () => {
  const {data, getData, hasError, isLoading} = useRequest(() =>
    fetchFinanceNotesService(),
  );

  return {
    financesNotes: data ?? [],
    getFinancesNotes: getData,
    isLoading,
    hasError,
  };
};

export default useFetchFinancesNotes;
