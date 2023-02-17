import mockCreateGymTraining from '@/mocks/functions/mockCreateGymTraining';
import mockUpdateGymTraining from '@/mocks/functions/mockUpdateGymTraining';
import {gymTrainingsMock} from '@/mocks/gymTrainings';
import {
  createGymTrainingRequest,
  updateGymTrainingRequest,
  getGymTrainingRequest,
  deleteGymTrainingRequest,
} from '@/requests';
import {GymTraining} from '@/shared/types';
import mockRequest from '@/shared/utils/mockRequest';

import apiService from '../apiService';
import {CreateGymTrainingParams, UpdateGymTrainingParams} from './types';

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

export function deleteGymTrainingService(trainingId: number): Promise<void> {
  return apiService({
    api: deleteGymTrainingRequest(trainingId),
    mock: mockRequest(gymTrainingsMock),
  });
}
