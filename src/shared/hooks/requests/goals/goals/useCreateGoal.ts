import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '@/shared/hooks/requests/useSendRequest';
import {createGoalService} from '@/shared/services/api/goals';

const useCreateGoal = (params: SendRequestOptions = {}) => {
  const createGym = useSendRequest({
    keyToInvalidate: QUERY_KEYS.GOALS,
    promise: createGoalService,
    ...params,
  });

  return createGym;
};

export default useCreateGoal;
