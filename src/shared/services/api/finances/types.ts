import {Finance} from '@/shared/types';

export interface CreateFinanceParams {
  paymentMethod: string;
  day: number;
  fixedDate: boolean;
  amount: number;
  name: string;
}

export interface UpdateFinanceParams {
  id: number;
  paymentMethod: string;
  day: number;
  fixedDate: boolean;
  amount: number;
  name: string;
}

export interface PayFinanceParams {
  financeId: number;
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

export interface CreateFinanceNoteParams {
  description?: string;
  name: string;
  amount: number;
}

export interface UpdateFinanceNoteParams {
  id: number;
  description?: string;
  name?: string;
  amount?: number;
}
