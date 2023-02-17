import {CurrencyValue} from './Currency';

export type FinanceType = 'receipt' | 'expense';

interface FinancePayment {
  id: number;
  date: Date;
}

export interface Finance {
  id: number;
  paymentMethod: string;
  paid: boolean;
  day: number;
  fixedDate: boolean;
  amount: number;
  name: string;
  payment: FinancePayment;
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
  description?: string;
  name: string;
  amount: number;
  //currency: CurrencyValue;
  id: number;
}

export type FinanceDateTypeValue = 'fixo' | 'variavel';

export interface FinanceDateType {
  label: string;
  value: FinanceDateTypeValue;
}
