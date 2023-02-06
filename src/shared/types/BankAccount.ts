import {FinanceType} from './Finance';
import {CurrencyValue} from './Currency';

export interface BankAccount {
  title: string;
  monthlyDebt?: {
    amount: number;
    currency: CurrencyValue;
    type: FinanceType;
  };
  bankId: string;
}
