import {CurrencyValue, FinanceType} from '@/shared/types';

export interface CreateFinanceNoteParams {
  name: string;
  description: string;
  currencyValue: CurrencyValue;
  amount: number;
  type: FinanceType;
}

export interface UpdateFinanceNoteParams {
  name?: string;
  description?: string;
  currencyValue?: CurrencyValue;
  amount?: number;
  type?: FinanceType;
}
