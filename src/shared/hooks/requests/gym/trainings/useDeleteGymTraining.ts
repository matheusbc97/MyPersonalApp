import {deleteGymTrainingService} from '@/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';

const useDeleteGymTraining = (params: SendRequestOptions) => {
  const deleteGym = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GYM_TRAININGS,
    promise: deleteGymTrainingService,
    ...params,
  });

  return deleteGym;
};

export default useDeleteGymTraining;
