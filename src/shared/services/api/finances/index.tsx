import mockRequest from '@/shared/utils/mockRequest';
import {getFinancesSectionMock} from '@/mocks/finances';

import apiService from '../apiService';

import {
  CreateFinanceParams,
  FetchMonthlyFinancesParams,
  FetchMonthlyFinancesResponse,
  PayFinanceParams,
  UpdateFinanceParams,
} from './types';
import {mockCreateFinance} from '@/mocks';
import {payFinance, deletePaymentOfFinance} from '@/shared/firebase/finances';
import {
  createFinancesRequest,
  fetchMonthlyFinancesRequest,
  updateFinancesRequest,
} from '@/shared/requests/finances/finances';

export function fetchFinancesService(
  params: FetchMonthlyFinancesParams,
): Promise<FetchMonthlyFinancesResponse[]> {
  return apiService({
    api: fetchMonthlyFinancesRequest(params),
    mock: mockRequest(getFinancesSectionMock()),
  });
}

export function createFinanceService(
  params: CreateFinanceParams,
): Promise<void> {
  return apiService({
    api: createFinancesRequest(params),
    mock: mockRequest(mockCreateFinance(params)),
  });
}

export function updateFinanceService(
  params: UpdateFinanceParams,
): Promise<void> {
  return apiService({
    api: updateFinancesRequest(params),
    mock: mockRequest(null),
  });
}

export function payFinanceService(params: PayFinanceParams): Promise<void> {
  return apiService({
    api: payFinance(params),
    mock: mockRequest(null),
  });
}

export function deletePaymentOfFinanceService(
  paymentId: string,
): Promise<void> {
  return apiService({
    api: deletePaymentOfFinance(paymentId),
    mock: mockRequest(null),
  });
}
