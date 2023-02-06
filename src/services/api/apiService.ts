import {mocked} from '@/configs';

interface apiServiceParams {
  api: Promise<any>;
  mock: Promise<any>;
}

function apiService({api, mock}: apiServiceParams) {
  if (mocked) {
    return mock;
  }

  return api;
}

export default apiService;
