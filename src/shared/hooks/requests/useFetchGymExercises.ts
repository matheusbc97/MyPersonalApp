import {fetchGymExercisesService} from '@/services';
import useRequest from './useRequest';

const useFetchGymExercises = () => {
  const {data, getData, hasError, isLoading} = useRequest(
    fetchGymExercisesService,
  );

  return {
    gymExercises: data ?? [],
    getGymExercises: getData,
    isLoading,
    hasError,
  };
};

export default useFetchGymExercises;
