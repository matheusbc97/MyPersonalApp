import {createGymExerciseRequest} from '@/shared/requests';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';

const useCreateGymExercise = (params: SendRequestOptions = {}) => {
  const createGym = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GYM_EXERCISES,
    promise: createGymExerciseRequest,
    ...params,
  });

  return createGym;
};

export default useCreateGymExercise;
