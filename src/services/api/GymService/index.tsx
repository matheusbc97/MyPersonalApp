import mockCreateGymTraining from '@/mocks/functions/mockCreateGymTraining';
import mockUpdateGymTraining from '@/mocks/functions/mockUpdateGymTraining';
import {gymExercisesMock} from '@/mocks/gymExercises';
import {gymTrainingsMock} from '@/mocks/gymTrainings';
import {
  createGymExerciseRequest,
  createGymTrainingRequest,
  getGymExercisesRequest,
  getGymTrainingRequest,
  updateGymExerciseRequest,
  updateGymTrainingRequest,
} from '@/requests/gymRequests';

import {GymExercise, GymTraining} from '@/shared/types';
import mockRequest from '@/shared/utils/mockRequest';
import apiService from '../apiService';
import {
  CreateGymExercisesParams,
  CreateGymTrainingParams,
  UpdateGymExercisesParams,
  UpdateGymTrainingParams,
} from './types';

export function createGymTrainingService(params: CreateGymTrainingParams) {
  return apiService({
    api: createGymTrainingRequest(params),
    mock: mockCreateGymTraining(params),
  });
}

export function updateGymTrainingService(params: UpdateGymTrainingParams) {
  return apiService({
    api: updateGymTrainingRequest(params),
    mock: mockUpdateGymTraining(params),
  });
}

export function fetchGymTrainingsService(): Promise<GymTraining[]> {
  return apiService({
    api: getGymTrainingRequest(),
    mock: mockRequest(gymTrainingsMock),
  });
}

export function fetchGymExercisesService(
  gymTrainingId: string,
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
