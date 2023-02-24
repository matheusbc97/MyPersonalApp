import {
  CreateFinanceParams,
  FetchMonthlyFinancesParams,
  UpdateFinanceParams,
} from '@/shared/services/api/finances/types';
import {Finance} from '@/shared/types';
import api from '../api';

export async function fetchMonthlyFinancesRequest(
  params: FetchMonthlyFinancesParams,
): Promise<Finance[]> {
  const response = await api.get('/finances-month', {
    params,
  });

  return response.data;
}

export async function createFinancesRequest(
  params: CreateFinanceParams,
): Promise<CreateFinanceParams[]> {
  const response = await api.post('/finances', params);

  return response.data;
}

export async function updateFinancesRequest({
  id,
  ...params
}: UpdateFinanceParams): Promise<UpdateFinanceParams[]> {
  const response = await api.patch(`/finances/${id}`, params);

  return response.data;
}
