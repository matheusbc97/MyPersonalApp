import {updateFinanceService} from '@/services';
import {UpdateFinanceParams} from '@/services/api/FinanceServices/types';
import {QUERY_KEYS} from '@/shared/constants/queryKeys';
import {useSendRequest} from '@/shared/hooks';
import {SendRequestOptions} from '../useSendRequest';

const useUpdateFinance = () => {
  const _updateFinance = useSendRequest({
    promise: updateFinanceService,
  });

  const updateFinance = (
    params: UpdateFinanceParams,
    options?: SendRequestOptions,
  ) => {
    return _updateFinance(params, {
      keyToInvalidate: QUERY_KEYS.FINANCES,
      ...options,
    });
  };

  return updateFinance;
};

export default useUpdateFinance;
