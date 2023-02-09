import {UpdateGymExerciseItemParams} from '@/services/api/gym/types';
import api from '../api';

export async function updateGymExerciseItemRequest({
  id,
  ...params
}: UpdateGymExerciseItemParams): Promise<void> {
  const response = await api.patch(`/gym/exercises-items/${id}`, params);

  return response.data;
}

export async function deleteGymExerciseItemRequest(id: number): Promise<void> {
  const response = await api.delete(`/gym/exercises-items/${id}`);

  return response.data;
}
