import mockRequest from '@/shared/utils/mockRequest';
import {getFinancesSectionMock} from '@/mocks/finances';

import apiService from '../apiService';

import {
  CreateFinanceParams,
  FetchMonthlyFinancesParams,
  PayFinanceParams,
  UpdateFinanceParams,
} from './types';
import {mockCreateFinance} from '@/mocks';
import {
  createFinancesRequest,
  fetchMonthlyFinancesRequest,
  updateFinancesRequest,
} from '@/shared/requests/finances/finances';
import {
  createPaymentRequest,
  deletePaymentRequest,
} from '@/shared/requests/finances/payments';
import {Finance} from '@/shared/types';

export function fetchFinancesService(
  params: FetchMonthlyFinancesParams,
): Promise<Finance[]> {
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
    api: createPaymentRequest(params),
    mock: mockRequest(null),
  });
}

export function deletePaymentOfFinanceService(
  paymentId: number,
): Promise<void> {
  return apiService({
    api: deletePaymentRequest(paymentId),
    mock: mockRequest(null),
  });
}
