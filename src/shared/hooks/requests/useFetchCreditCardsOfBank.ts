import {fetchCreditCardsOfBankService} from '@/shared/services/api/BanksService';

import useRequest from './useRequest';

const useFetchCreditCardsOfBank = () => {
  const {data, getData, hasError, isLoading} = useRequest(
    fetchCreditCardsOfBankService,
  );

  return {
    creditCards: data ?? [],
    fetchCreditCards: getData,
    fetchCreditCardsLoading: isLoading,
    fetchCreditCardsError: hasError,
  };
};

export default useFetchCreditCardsOfBank;
