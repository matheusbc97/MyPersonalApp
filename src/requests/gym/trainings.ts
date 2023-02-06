import {
  CreateGymTrainingParams,
  UpdateGymTrainingParams,
} from '@/services/api/gym/types';
import {GymTraining} from '@/shared/types';
import api from '../api';

export async function getGymTrainingRequest(): Promise<GymTraining[]> {
  const response = await api.get('/gym/trainings');

  return response.data;
}

export async function createGymTrainingRequest(
  params: CreateGymTrainingParams,
): Promise<GymTraining> {
  const response = await api.post('/gym/trainings', params);

  return response.data;
}

export async function updateGymTrainingRequest({
  id,
  ...params
}: UpdateGymTrainingParams): Promise<GymTraining> {
  const response = await api.patch(`/gym/trainings/${id}`, params);

  return response.data;
}

export async function deleteGymTrainingRequest(id: string): Promise<void> {
  await api.delete(`/gym/trainings/${id}`);
}
