import {fetchBanksService} from '@/shared/services/api/BanksService';

import useRequest from './useRequest';

const useFetchBanks = () => {
  const {data, getData, hasError, isLoading} = useRequest(fetchBanksService);

  return {
    banks: data ?? [],
    getBanks: getData,
    isLoading,
    hasError,
  };
};

export default useFetchBanks;
