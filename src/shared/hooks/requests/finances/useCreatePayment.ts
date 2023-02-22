import {payFinanceService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import useSendRequest, {SendRequestOptions} from '../useSendRequest';

function useCreatePayment(params: SendRequestOptions = {}) {
  const createPayment = useSendRequest({
    keyToInvalidate: QUERY_KEYS.FINANCES,
    promise: payFinanceService,
    ...params,
  });

  return createPayment;
}

export default useCreatePayment;
