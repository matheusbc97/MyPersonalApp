import {
  CreateFinanceParams,
  FetchMonthlyFinancesParams,
  FetchMonthlyFinancesResponse,
} from '@/services/api/FinanceServices/types';
import api from '../api';

export async function fetchMonthlyFinancesRequest(
  params: FetchMonthlyFinancesParams,
): Promise<FetchMonthlyFinancesResponse[]> {
  const response = await api.get('/finances-month', {
    params,
  });

  return response.data.map((finance: any) => ({
    month: finance.month,
    year: finance.year,
    data: finance.finances,
    total: finance.total,
  }));
}

export async function createFinancesRequest(
  params: CreateFinanceParams,
): Promise<CreateFinanceParams[]> {
  const response = await api.post('/finances', params);

  return response.data;
}
