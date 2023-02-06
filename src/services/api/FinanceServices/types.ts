import {CurrencyValue, FinanceType} from '@/shared/types';

export interface CreateFinanceParams {
  paymentMethod: string;
  day: number;
  fixedDate: boolean;
  amount: number;
  currencyValue: CurrencyValue;
  name: string;
  type: FinanceType;
}

export interface UpdateFinanceParams {
  paymentMethod: string;
  day: number;
  fixedDate: boolean;
  amount: number;
  currencyValue: CurrencyValue;
  name: string;
  type: FinanceType;
}

export interface PayFinanceParams {
  financeId: string;
  date: Date;
}
