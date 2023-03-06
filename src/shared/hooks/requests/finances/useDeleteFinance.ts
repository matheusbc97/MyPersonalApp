import {deleteFinanceService} from '@/shared/services';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '../useSendRequest';

const useDeleteFinance = () => {
  const _deleteFinance = useSendRequest({
    promise: deleteFinanceService,
  });

  const deleteFinance = (financeId: number, options?: SendRequestOptions) => {
    return _deleteFinance(financeId, {
      keyToInvalidate: QUERY_KEYS.FINANCES,
      ...options,
    });
  };

  return deleteFinance;
};

export default useDeleteFinance;
