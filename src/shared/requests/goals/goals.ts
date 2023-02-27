import {
  CreateGoalParams,
  UpdateGoalParams,
} from '@/shared/services/api/goals/types';
import {Goal} from '@/shared/types';

import api from '../api';

export async function getGoalsRequest(): Promise<Goal[]> {
  const response = await api.get('/goals');

  return response.data;
}

export async function createGoalRequest(
  params: CreateGoalParams,
): Promise<Goal> {
  const response = await api.post('/goals', params);

  return response.data;
}

export async function updateGoalRequest({
  id,
  ...params
}: UpdateGoalParams): Promise<Goal> {
  const response = await api.patch(`/goals/${id}`, params);

  return response.data;
}

export async function deleteGoalRequest(id: number): Promise<void> {
  await api.delete(`/goals/${id}`);
}
