import {gymExercisesMock} from '@/mocks/gymExercises';
import {
  getGymExercisesRequest,
  createGymExerciseRequest,
  updateGymExerciseRequest,
  deleteGymExerciseRequest,
} from '@/shared/requests';
import {GymExercise} from '@/shared/types';
import mockRequest from '@/shared/utils/mockRequest';
import apiService from '../apiService';
import {CreateGymExercisesParams, UpdateGymExercisesParams} from './types';

export function fetchGymExercisesService(
  gymTrainingId: number,
): Promise<GymExercise[]> {
  return apiService({
    api: getGymExercisesRequest(gymTrainingId),
    mock: mockRequest(gymExercisesMock),
  });
}

export function createGymExercisesService(params: CreateGymExercisesParams) {
  return apiService({
    api: createGymExerciseRequest(params),
    mock: mockRequest(null),
  });
}

export function updateGymExercisesService(params: UpdateGymExercisesParams) {
  return apiService({
    api: updateGymExerciseRequest(params),
    mock: mockRequest(null),
  });
}

export function deleteGymExerciseService(trainingId: number): Promise<void> {
  return apiService({
    api: deleteGymExerciseRequest(trainingId),
    mock: mockRequest(null),
  });
}
