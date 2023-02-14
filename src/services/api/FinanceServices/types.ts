import {CurrencyValue, Finance, FinanceType} from '@/shared/types';

export interface CreateFinanceParams {
  paymentMethod: string;
  day: number;
  fixedDate: boolean;
  amount: number;
  name: string;
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

export interface FetchMonthlyFinancesResponse {
  month: number;
  year: number;
  data: Finance[];
  total: number;
}

export interface FetchMonthlyFinancesParams {
  yearAndMonthStart: string;
  yearAndMonthEnd: string;
}
