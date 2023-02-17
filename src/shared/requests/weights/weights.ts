import {
  CreateWeightsParams,
  UpdateWeightParams,
} from '@/shared/services/api/weights/types';
import {Weight} from '@/shared/types';
import api from '../api';

export async function getWeightsRequest(): Promise<Weight[]> {
  const response = await api.get('/weights');

  return response.data;
}

export async function createWeightRequest(
  params: CreateWeightsParams,
): Promise<void> {
  const response = await api.post('/weights', params);

  return response.data;
}

export async function updateWeightRequest({
  id,
  ...params
}: UpdateWeightParams): Promise<void> {
  const response = await api.put(`/weights/${id}`, params);

  return response.data;
}

export async function deleteWeightRequest(id: number): Promise<void> {
  const response = await api.delete(`/weights/${id}`);

  return response.data;
}
