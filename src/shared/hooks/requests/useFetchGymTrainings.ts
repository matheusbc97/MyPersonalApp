import {fetchGymTrainingsService} from '@/services/api/GymService';
import useRequest from './useRequest';

const useFetchGymTrainings = () => {
  const {data, getData, hasError, isLoading} = useRequest(
    fetchGymTrainingsService,
  );

  return {
    gymTrainings: data ?? [],
    fetchGymTrainings: getData,
    isLoading,
    hasError,
  };
};

export default useFetchGymTrainings;
