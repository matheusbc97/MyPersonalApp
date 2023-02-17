import {createFinanceService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import useSendRequest, {SendRequestOptions} from '../useSendRequest';

function useCreateFinance(params: SendRequestOptions = {}) {
  const createFinance = useSendRequest({
    keyToInvalidate: QUERY_KEYS.FINANCES,
    promise: createFinanceService,
    ...params,
  });

  return createFinance;
}

export default useCreateFinance;
