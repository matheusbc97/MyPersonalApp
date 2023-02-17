import {
  getWeightsRequest,
  createWeightRequest,
  deleteWeightRequest,
  updateWeightRequest,
} from '@/requests';
import {Weight} from '@/shared/types';
import mockRequest from '@/shared/utils/mockRequest';
import apiService from '../apiService';
import {CreateWeightsParams, UpdateWeightParams} from './types';

export function fetchWeightsService(): Promise<Weight[]> {
  return apiService({
    api: getWeightsRequest(),
    mock: mockRequest(null),
  });
}

export function createWeightService(params: CreateWeightsParams) {
  return apiService({
    api: createWeightRequest(params),
    mock: mockRequest(null),
  });
}

export function updateWeightService(params: UpdateWeightParams) {
  return apiService({
    api: updateWeightRequest(params),
    mock: mockRequest(null),
  });
}

export function deleteWeightService(id: number): Promise<void> {
  return apiService({
    api: deleteWeightRequest(id),
    mock: mockRequest(null),
  });
}
