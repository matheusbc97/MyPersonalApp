import mockRequest from '@/shared/utils/mockRequest';
import {getFinancesSectionMock} from '@/mocks/finances';

import apiService from '../apiService';

import {SectionDataWithTotal, Finance} from '@/shared/types';
import {
  CreateFinanceParams,
  PayFinanceParams,
  UpdateFinanceParams,
} from './types';
import {mockCreateFinance, mockUpdateFinance} from '@/mocks';
import {
  fetchFinances,
  createFinance,
  payFinance,
  updateFinance,
  deletePaymentOfFinance,
} from '@/shared/firebase/finances';

export function fetchFinancesService(): Promise<SectionDataWithTotal<Finance>> {
  return apiService({
    api: fetchFinances(),
    mock: mockRequest(getFinancesSectionMock()),
  });
}

export function createFinanceService(
  params: CreateFinanceParams,
): Promise<void> {
  return apiService({
    api: createFinance(params),
    mock: mockRequest(mockCreateFinance(params)),
  });
}

export function updateFinanceService(
  id: string,
  updates: UpdateFinanceParams,
): Promise<void> {
  return apiService({
    api: updateFinance(id, updates),
    mock: mockRequest(mockUpdateFinance(id, updates)),
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
