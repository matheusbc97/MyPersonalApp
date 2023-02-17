import {getBanksSectionsMock} from '../../../../mocks/banks';
import {Bank} from '@/shared/types/Bank';
import mockRequest from '@/shared/utils/mockRequest';

import apiService from '../apiService';
import fakeApiPromise from '../fakeApiPromise';

import {
  SectionDataWithTotal,
  BankAccount,
  CreditCardWithCurrentBill,
} from '@/shared/types';
import {getCreditCardsFromBankIdMock} from '@/mocks/creditCards';
import {bankAccountFindByIdMock} from '@/mocks/bankAccounts';
import {CreateBankParams, CreateCreditCardParams} from './types';
import mockCreateCreditCard from '@/mocks/functions/mockCreateCreditCard';
import {createBank, fetchBanks} from '@/shared/firebase/banks';

export function fetchBanksService(): Promise<SectionDataWithTotal<Bank>> {
  return apiService({
    api: fetchBanks(),
    mock: mockRequest(getBanksSectionsMock()),
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

export function createBankService(params: CreateBankParams): Promise<void> {
  return apiService({
    api: createBank(params),
    mock: mockRequest(null),
  });
}
