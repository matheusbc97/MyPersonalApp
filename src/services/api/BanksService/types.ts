import {BankType} from '@/shared/types';

export interface CreateCreditCardParams {
  lastFourDigits: string;
  dueDay: number;
  expiringDate: string;
  bankId: string;
}

export interface CreateBankParams {
  name: string;
  type: BankType;
}
