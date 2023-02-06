import {
  CreateGymExercisesParams,
  CreateGymTrainingParams,
  UpdateGymExercisesParams,
  UpdateGymTrainingParams,
} from '@/services/api/GymService/types';
import {GymExercise, GymTraining} from '@/shared/types';
import api from './api';

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

export async function getGymExercisesRequest(
  trainingId: string,
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
