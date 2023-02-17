import {fetchGymExercisesService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useQuery} from 'react-query';

const useFetchGymExercises = (gymTrainingId: number) => {
  const {data, isLoading, isError, refetch} = useQuery(
    QUERY_KEYS.GYM_EXERCISES,
    () => fetchGymExercisesService(gymTrainingId),
  );

  return {
    gymExercises: data ?? [],
    refetchGymExercises: refetch,
    isLoading,
    hasError: isError,
  };
};

export default useFetchGymExercises;
