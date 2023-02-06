import {createGymTrainingService} from '@/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';

const useCreateGym = (params: SendRequestOptions = {}) => {
  const createGym = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GYM_TRAININGS,
    promise: createGymTrainingService,
    ...params,
  });

  return createGym;
};

export default useCreateGym;
