import {getBanksSectionsMock} from '../../../../mocks/banks';
import {Bank} from '@/shared/types/Bank';
import mockRequest from '@/shared/utils/mockRequest';

import apiService from '../apiService';
import fakeApiPromise from '../fakeApiPromise';

import {
  BankAccount,
  CreditCardWithCurrentBill,
  SectionData,
} from '@/shared/types';
import {getCreditCardsFromBankIdMock} from '@/mocks/creditCards';
import {bankAccountFindByIdMock} from '@/mocks/bankAccounts';
import {CreateBankParams, CreateCreditCardParams} from './types';
import mockCreateCreditCard from '@/mocks/functions/mockCreateCreditCard';
import {
  createBankRequest,
  getBanksRequest,
} from '@/shared/requests/finances/banks';
import {getBanksSections} from '@/shared/utils/getBanksSections';

export async function fetchBanksService(): Promise<SectionData<Bank>> {
  const response = (await apiService({
    api: getBanksRequest(),
    mock: mockRequest(getBanksSectionsMock()),
  })) as Bank[];

  return getBanksSections(response);
}

export function createBankService(params: CreateBankParams): Promise<void> {
  return apiService({
    api: createBankRequest(params),
    mock: mockRequest(null),
  });
}

export function fetchCreditCardsOfBankService(
  bankId: string,
): Promise<CreditCardWithCurrentBill[]> {
  return apiService({
    api: fakeApiPromise(),
    mock: mockRequest(getCreditCardsFromBankIdMock(bankId)),
  });
}

export function fetchBankAccountsOfBankService(
  bankId: string,
): Promise<BankAccount[]> {
  return apiService({
    api: fakeApiPromise(),
    mock: mockRequest(bankAccountFindByIdMock(bankId)),
  });
}

export function createCreditCardService(
  params: CreateCreditCardParams,
): Promise<void> {
  return apiService({
    api: fakeApiPromise(),
    mock: mockCreateCreditCard(params),
  });
}
