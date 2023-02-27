import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';
import {deleteGoalRequest} from '@/shared/requests/goals/goals';

const useDeleteGoal = (params: SendRequestOptions = {}) => {
  const deleteGoal = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GOALS,
    promise: deleteGoalRequest,
    ...params,
  });

  return deleteGoal;
};

export default useDeleteGoal;
