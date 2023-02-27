import mockRequest from '@/shared/utils/mockRequest';

import apiService from '../apiService';

import {Goal} from '@/shared/types';

import {CreateGoalParams, UpdateGoalParams} from './types';
import {
  createGoalRequest,
  updateGoalRequest,
  deleteGoalRequest,
  getGoalsRequest,
} from '@/shared/requests/goals/goals';

export function fetchGoalService(): Promise<Goal[]> {
  return apiService({
    api: getGoalsRequest(),
    mock: mockRequest(null),
  });
}

export function deleteGoalService(id: number): Promise<void> {
  return apiService({
    api: deleteGoalRequest(id),
    mock: mockRequest(null),
  });
}

export function createGoalService(params: CreateGoalParams): Promise<null> {
  return apiService({
    api: createGoalRequest(params),
    mock: mockRequest(null),
  });
}

export function updateGoalService(params: UpdateGoalParams): Promise<null> {
  return apiService({
    api: updateGoalRequest(params),
    mock: mockRequest(null),
  });
}
