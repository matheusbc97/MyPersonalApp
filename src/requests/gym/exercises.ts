import {
  CreateGymExercisesParams,
  UpdateGymExercisesParams,
} from '@/services/api/gym/types';
import {GymExercise} from '@/shared/types';
import api from '../api';

export async function getGymExercisesRequest(
  trainingId: number,
): Promise<GymExercise[]> {
  const response = await api.get('/gym/exercises', {params: {trainingId}});

  return response.data;
}

export async function createGymExerciseRequest(
  params: CreateGymExercisesParams,
): Promise<GymExercise> {
  const response = await api.post('/gym/exercises', params);

  return response.data;
}

export async function updateGymExerciseRequest({
  id,
  ...params
}: UpdateGymExercisesParams): Promise<GymExercise> {
  const response = await api.put(`/gym/exercises/${id}`, params);

  return response.data;
}

export async function deleteGymExerciseRequest(
  id: number,
): Promise<GymExercise> {
  const response = await api.delete(`/gym/exercises/${id}`);

  return response.data;
}
