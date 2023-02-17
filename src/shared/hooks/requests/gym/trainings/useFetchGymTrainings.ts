import {fetchGymTrainingsService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useQuery} from 'react-query';

const useFetchGymTrainings = () => {
  const {data, isLoading, isError} = useQuery(
    QUERY_KEYS.GYM_TRAININGS,
    fetchGymTrainingsService,
  );

  return {
    gymTrainings: data ?? [],
    isLoading,
    hasError: isError,
  };
};

export default useFetchGymTrainings;
