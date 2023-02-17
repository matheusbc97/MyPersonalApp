import {
  CreateBankParams,
  UpdateBankParams,
} from '@/shared/services/api/BanksService/types';
import {Bank} from '@/shared/types';

import api from '../api';

export async function getBanksRequest(): Promise<Bank[]> {
  const response = await api.get('/finances-banks');

  return response.data;
}

export async function createBankRequest(
  params: CreateBankParams,
): Promise<Bank> {
  const response = await api.post('/finances-banks', params);

  return response.data;
}

export async function updateBankRequest({
  id,
  ...params
}: UpdateBankParams): Promise<Bank> {
  const response = await api.patch(`/finances-banks/${id}`, params);

  return response.data;
}

export async function deleteBankRequest(id: number): Promise<void> {
  await api.delete(`/finances-banks/${id}`);
}
