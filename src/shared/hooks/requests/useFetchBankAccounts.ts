import {fetchBankAccountsOfBankService} from '@/services/api/BanksService';

import useRequest from './useRequest';

const useFetchBankAccounts = () => {
  const {data, getData, hasError, isLoading} = useRequest(
    fetchBankAccountsOfBankService,
  );

  return {
    bankAccounts: data ?? [],
    getBankAccounts: getData,
    isLoading,
    hasError,
  };
};

export default useFetchBankAccounts;
