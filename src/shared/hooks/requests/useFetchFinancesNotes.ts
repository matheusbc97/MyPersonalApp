import {fetchFinanceNotesService} from '@/services/api/FinanceNoteServices';
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
