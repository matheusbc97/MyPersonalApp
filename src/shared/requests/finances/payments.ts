import {PayFinanceParams} from '@/shared/services/api/finances/types';
import api from '../api';

export async function createPaymentRequest(
  params: PayFinanceParams,
): Promise<void> {
  const response = await api.post('/finances-payments', params);

  return response.data;
}

export async function deletePaymentRequest(id: number): Promise<void> {
  await api.delete(`/finances-payments/${id}`);
}
