import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import useSendRequest, {SendRequestOptions} from '../useSendRequest';
import {deletePaymentRequest} from '@/shared/requests/finances/payments';

function useDeletePayment(params: SendRequestOptions = {}) {
  const deletePayment = useSendRequest({
    keyToInvalidate: QUERY_KEYS.FINANCES,
    promise: deletePaymentRequest,
    ...params,
  });

  return deletePayment;
}

export default useDeletePayment;
