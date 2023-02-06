import {Group} from '@/shared/types';
import {CurrencyValue} from './Currency';

export type FinanceType = 'receipt' | 'expense';

export interface Finance {
  id: string;
  paymentMethod: string;
  paid: boolean;
  day: number;
  fixedDate: boolean;
  amount: number;
  currencyValue: CurrencyValue;
  name: string;
  type: FinanceType;
  group: Group;
}

export interface MonthlyFinance extends Finance {
  paymentId?: string;
}

export interface FinanceHistoric {
  id: string;
  date: number;
  financeId: string;
}

export interface FinanceNote {
  type: FinanceType;
  description?: string;
  name: string;
  amount: number;
  currency: CurrencyValue;
  id: string;
}

export type FinanceDateTypeValue = 'fixo' | 'variavel';

export interface FinanceDateType {
  label: string;
  value: FinanceDateTypeValue;
}
