import {updateGymExerciseItemRequest} from '@/requests/gym/exerciseItems';
import {UpdateGymExerciseItemParams} from '@/services/api/gym/types';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';

interface UpdateGymExerciseItemHookParams extends UpdateGymExerciseItemParams {
  exerciseId: number;
}

const useUpdateGymExerciseItem = (props: SendRequestOptions) => {
  const _updateGymExerciseItem = useSendRequest({
    promise: updateGymExerciseItemRequest,
    ...props,
  });

  const updateGymExerciseItem = ({
    exerciseId,
    ...params
  }: UpdateGymExerciseItemHookParams) => {
    _updateGymExerciseItem(params, {
      keyToInvalidate: [QUERY_KEYS.GYM_EXERCISES, exerciseId],
    });
  };

  return updateGymExerciseItem;
};

export default useUpdateGymExerciseItem;
