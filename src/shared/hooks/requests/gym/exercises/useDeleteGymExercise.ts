import {deleteGymExerciseRequest} from '@/shared/requests';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';

const useDeleteGymExercise = (params: SendRequestOptions) => {
  const deleteGym = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GYM_EXERCISES,
    promise: deleteGymExerciseRequest,
    ...params,
  });

  return deleteGym;
};

export default useDeleteGymExercise;
